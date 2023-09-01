from graphene_django import DjangoObjectType, fields
from CarOrder.models import Appointment, Visit
from users.models import User
import graphene
import graphql_jwt
from graphene_file_upload.scalars import Upload


# class ImageUploadMutation(graphene.Mutation):
#     class Arguments:
#         file = Upload(required=False)
#         car_id = graphene.String()
#         is_main = graphene.Boolean()

#     car_id = graphene.String()
#     success = graphene.Boolean()
#     is_main = graphene.Boolean()

#     @staticmethod
#     def mutate(root, info, file, car_id, is_main):
#         # Save the uploaded file to a specific location
#         car = Car.objects.filter(id=car_id).first()
#         image = CarGallery(img=file, car=car, is_main=is_main)
#         image.save()
#         return ImageUploadMutation(success=True, car_id=car_id, is_main=is_main)


class userMutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
