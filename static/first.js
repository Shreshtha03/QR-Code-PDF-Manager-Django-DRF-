// static/qr_app/main.js

document.addEventListener("DOMContentLoaded", function () {
    fetchPDFs();

    const uploadForm = document.getElementById("uploadForm");
    uploadForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(uploadForm);
        const response = await fetch("/api/pdfdocuments/", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            uploadForm.reset();
            fetchPDFs();
        } else {
            alert("Failed to upload PDF.");
        }
    });
});

async function fetchPDFs() {
    const response = await fetch("/api/pdfdocuments/");
    const data = await response.json();

    const tbody = document.querySelector("#pdfTable tbody");
    tbody.innerHTML = "";

    data.forEach((item) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="checkbox" class="pdf-checkbox" data-id="${item.id}" data-pdf="${item.pdf_file}"></td>
            <td>${item.pdf_file.split("/").pop()}</td>
            <td><button onclick="showQR('${item.qr_code_image}', '${item.pdf_file.split("/").pop()}')">View</button></td>
        `;

        tbody.appendChild(row);
    });
}

function showQR(imageUrl, fileName) {
    const qrSection = document.getElementById("qrPreview");
    const qrImage = document.getElementById("qrImage");
    const fileNameDisplay = document.getElementById("fileNameDisplay");
    const downloadQR = document.getElementById("downloadQR");

    qrSection.style.display = "block";
    qrImage.src = imageUrl;
    fileNameDisplay.innerText = `QR for: ${fileName}`;
    downloadQR.href = imageUrl;
}

function downloadSelectedPDFs() {
    const selected = document.querySelectorAll(".pdf-checkbox:checked");
    if (selected.length === 0) {
        alert("Please select at least one PDF.");
        return;
    }

    const zip = new JSZip();
    const folder = zip.folder("selected_pdfs");
    let count = 0;

    selected.forEach((checkbox) => {
        const pdfUrl = checkbox.getAttribute("data-pdf");
        const filename = pdfUrl.split("/").pop();

        fetch(pdfUrl)
            .then((res) => res.blob())
            .then((blob) => {
                folder.file(filename, blob);
                count++;

                if (count === selected.length) {
                    zip.generateAsync({ type: "blob" }).then((content) => {
                        saveAs(content, "selected_pdfs.zip");
                    });
                }
            });
    });
}
