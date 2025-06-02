    function KirimData() {
        const form = document.getElementById("formPeminatan");
        const formData = new FormData(form);

        const nama = formData.get("nama");
        const nim = formData.get("nim");
        const peminatan = formData.get("peminatan");
        const fakultas = formData.get("fakultas");
        const tanggal = formData.get("tanggal");
        const alamat = formData.get("alamat");

        alert(
            "Nama      : " + nama +
            "\nNIM       : " + nim +
            "\nPeminatan : " + (peminatan ? peminatan : "(Belum dipilih)") +
            "\nFakultas  : " + fakultas +
            "\nTanggal   : " + tanggal +
            "\nAlamat    : " + alamat
        );
    }