import graphene
from graphene_django import DjangoObjectType

from CarOrder.models import Appointment, Visit


class AppointmentType(DjangoObjectType):
    class Meta:
        model = Appointment
        fields = "__all__"


class VisitType(DjangoObjectType):
    class Meta:
        model = Visit
        fields = "__all__"


class Query(graphene.ObjectType):
    getAppointments = graphene.List(AppointmentType, id=graphene.Int())
    getAppointment = graphene.Field(AppointmentType, id=graphene.Int())
    getVisits = graphene.List(VisitType, id=graphene.Int())
    getVisit = graphene.Field(VisitType, id=graphene.Int())

    def resolve_getAppointments(root, info, id):
        return Appointment.objects.filter(car__id=id).all()

    def resolve_getAppointment(root, info, id):
        # return get_object_or_404(Appointment, pk=id)
        try:
            appointment = Appointment.objects.get(id=id)
        except Appointment.DoesNotExist:
            appointment = None
        return appointment

    def resolve_getVisits(root, info, id):
        return Visit.objects.filter(visit__id=id).all()

    def resolve_getVisit(root, info, id):
        # return get_object_or_404(Visit, pk=id)
        try:
            visit = Visit.objects.get(id=id)
        except Visit.DoesNotExist:
            visit = None
        return visit

schema = graphene.Schema(query=Query)
