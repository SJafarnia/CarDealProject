from django import forms
from Cars.models import CarGallery

class CreateGalleryMutationForm(forms.ModelForm):
    class Meta:
        model = CarGallery
        fields = [
            "img",
        ]