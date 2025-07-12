from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import PDFDocument
from .serializers import PDFDocumentSerializer
import qrcode
from django.core.files.base import ContentFile
import io

class PDFDocumentViewSet(viewsets.ModelViewSet):
    queryset = PDFDocument.objects.all().order_by('-uploaded_at')
    serializer_class = PDFDocumentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            pdf_instance = serializer.save()

            # Generate QR Code using PDF file URL
            pdf_url = request.build_absolute_uri(pdf_instance.pdf_file.url)
            qr = qrcode.make(pdf_url)

            # Save QR code image to in-memory file
            img_io = io.BytesIO()
            qr.save(img_io, format='PNG')
            img_name = f"qr_{pdf_instance.id}.png"
            pdf_instance.qr_code_image.save(img_name, ContentFile(img_io.getvalue()), save=True)

            return Response(self.get_serializer(pdf_instance).data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

