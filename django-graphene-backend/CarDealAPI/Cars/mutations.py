from Cars.models import Car, CarGallery, CarView
import graphene
from graphene_file_upload.scalars import Upload


class ImageUploadMutation(graphene.Mutation):
    class Arguments:
        file = Upload(required=False)
        car_id = graphene.String()
        is_main = graphene.Boolean()

    success = graphene.Boolean()
    is_main = graphene.Boolean()
    car_id = graphene.String()

    @staticmethod
    def mutate(root, info, file, car_id, is_main):
        # Save the uploaded file to a specific location
        car = Car.objects.filter(id=car_id).first()
        image = CarGallery(img=file, car=car, is_main=is_main)
        image.save()
        return ImageUploadMutation(success=True, car_id=car_id, is_main=is_main)


class CreateNewCar(graphene.Mutation):
    class Arguments:
        # Define the input arguments for creating the object
        # input_data = graphene.Argument(graphene.String)
        brand = graphene.Argument(graphene.String)
        model = graphene.Argument(graphene.String)
        year = graphene.Argument(graphene.Int)
        usage = graphene.Argument(graphene.Int)
        price = graphene.Argument(graphene.Int)
        fuel = graphene.Argument(graphene.String)
        transmission = graphene.Argument(graphene.String)
        description = graphene.Argument(graphene.String)
        front_chassie = graphene.Argument(graphene.String)
        rear_chassie = graphene.Argument(graphene.String)
        color = graphene.Argument(graphene.String)

    # Define the fields you want to include in the new object
    id = graphene.Int()
    # company = graphene.String()
    # model = graphene.String()
    # year = graphene.Int()
    # usage = graphene.Int()
    # price = graphene.Int()
    # fuel = graphene.String()
    # seller

    def mutate(
        self,
        info,
        brand,
        model,
        year,
        usage,
        price,
        fuel,
        transmission,
        description,
        front_chassie,
        rear_chassie,
        color,
    ):
        new_object = Car(
            brand=brand,
            model=model,
            year=year,
            usage=usage,
            price=price,
            fuel=fuel,
            transmission=transmission,
            description=description,
            front_chassie=front_chassie,
            rear_chassie=rear_chassie,
            color=color,
        )
        new_object.save()

        # Return the newly created object
        return CreateNewCar(
            id=new_object.id,
        )

    def save(self, *args, **kwargs):
        # if self.car_image.all():
        #     images = self.car_image.all()
        #     for pic in images:
        #         indx = images.index(pic)
        #         if images[indx] == 0:
        #             pic.is_main = True
        #         else:
        #             pic.is_main = False
        #         pic.save()
        super(Car, self).save(*args, **kwargs)
        return self.id


class CreateNewView(graphene.Mutation):
    class Arguments:
        car_id = graphene.Int()
        ip = graphene.String()

    success = graphene.Boolean()

    @staticmethod
    def mutate(root, info, car_id, ip):
        user = info.context.user
        isViewed = CarView.objects.filter(car=car_id, user=user).all()
        if not user.is_authenticated:
            raise Exception("Authentication credentials were not provided")
        if not isViewed and user.is_authenticated:
            car = Car.objects.get(id=car_id)
            view = CarView(car=car, ip=ip, user=user)
            view.save()
            print(view)
            return CreateNewView(success=True)
        raise Exception("view exists")


class Mutation(graphene.ObjectType):
    image_upload = ImageUploadMutation.Field("imageUpload")
    new_car = CreateNewCar.Field("newCar")
    create_view = CreateNewView.Field("createView")
