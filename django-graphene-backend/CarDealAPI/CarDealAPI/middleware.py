from graphene import ObjectType, String, Schema, Field


class DisableIntrospectionMiddleware:
    """
    This class hides the introspection.
    """

    def resolve(self, next, root, info, **kwargs):
        if info.field_name.lower() in ["__schema", "_introspection"]:
            query = ObjectType(
                "Query",
                lambda: {"Hello": Field(String, resolver=lambda *_: "World")},
            )
            info.schema = Schema(query=query)
            return next(root, info, **kwargs)
        return next(root, info, **kwargs)
