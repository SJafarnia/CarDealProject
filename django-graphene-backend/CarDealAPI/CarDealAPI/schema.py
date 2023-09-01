import graphene
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery
import Cars.schema
import CarOrder.schema
import Cars.mutations
import users.schema


class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()
    token_verify = mutations.VerifyToken.Field()


class Mutation(
    AuthMutation,
    Cars.mutations.Mutation,
    graphene.ObjectType,
):
    pass


class Query(
    UserQuery,
    MeQuery,
    Cars.schema.Query,
    CarOrder.schema.Query,
    users.schema.Query,
    graphene.ObjectType,
):
    def resolve___schema(self, info):
        return None

    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
