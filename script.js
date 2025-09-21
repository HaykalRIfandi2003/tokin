document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Helper supaya rapi
    const swalConfirm = (options) => Swal.fire(options);

    // LOGOUT
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            swalConfirm({
                title: 'Yakin mau logout?',
                text: 'Kamu bisa login pas mau top-up lagi!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#621FD6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Logout!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Kamu sudah logout!',
                        text: 'Sampai jumpa lagi 👋',
                        icon: 'success',
                        timer: 1400,
                        showConfirmButton: false
                    }).then(() => {
                        window.location.href = 'index.html';
                    });
                }
            });
        });
    }

    // FORM HANDLER
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            // cegah form submit default — tampilkan swal dulu
            e.preventDefault();

            Swal.fire({
                title: 'Konfirmasi Pesanan',
                text: 'Semua data yang dimasukkan benar?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#621FD6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Lanjut',
                cancelButtonText: 'Batalkan'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Pesanan Berhasil!',
                        text: 'Pesanan sedang kami verifikasi, silahkan pantau status proses secara berkala ✅',
                        icon: 'success',
                        showConfirmButton: true
                    }).then(() => {
                        window.location.href = 'transaction.html';
                    });
                }
            });
        });
    }
});