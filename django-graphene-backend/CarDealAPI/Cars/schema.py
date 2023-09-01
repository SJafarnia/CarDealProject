import graphene
from graphene_django import DjangoObjectType
from .models import Car, CarGallery, CarView
from django.db.models import Count


class CarType(DjangoObjectType):
    class Meta:
        model = Car
        fields = "__all__"


class CarViewtType(DjangoObjectType):
    class Meta:
        model = CarView
        fields = "__all__"


class GalleryType(DjangoObjectType):
    class Meta:
        model = CarGallery
        fields = ("id", "img", "is_main", "car")

    url = graphene.String()

    def resolve_url(self, info):
        return f"http://127.0.0.1:8000/{self.img.url}"


class Query(graphene.ObjectType):
    getAllCars = graphene.List(
        CarType,
        color=graphene.String(),
        price=graphene.Int(),
        order_by=graphene.String(),
    )
    getCar = graphene.Field(CarType, id=graphene.Int())
    getGallery = graphene.List(GalleryType, id=graphene.Int())
    getCarViews = graphene.Field(graphene.Int, id=graphene.Int())

    def resolve_getCar(root, info, id):
        # return get_object_or_404(Car,id=id)
        # print(root)
        try:
            car = Car.objects.get(id=id)
        except Car.DoesNotExist:
            car = None

        return car

    def resolve_getAllCars(root, info, color=None, price=None, order_by=None):
        qs = Car.objects.all()

        # if price:
        #     qs= qs.filter(price)
        if order_by:
            if order_by == "highest":
                qs = qs.order_by("-price")
            elif order_by == "lowest":
                qs = qs.order_by("price")
            elif order_by == "newest":
                qs = qs.order_by("-date_created")
            elif order_by == "oldest":
                qs = qs.order_by("date_created")

        return qs

    def resolve_getGallery(root, info, id):
        print(info)
        return CarGallery.objects.filter(car__id=id).all()

    def resolve_getCarViews(root, info, id):
        views = (
            CarView.objects.filter(car__id=id)
            .aggregate(views_count=Count("id"))
            .get("views_count", 0)
        )
        return views


schema = graphene.Schema(query=Query)
