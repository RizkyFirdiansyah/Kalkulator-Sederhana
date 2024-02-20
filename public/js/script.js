document.addEventListener('DOMContentLoaded', () => {
    // Menambahkan event listener ke elemen HTML di luar sidebar
    document.addEventListener('click', function (event) {
        const sidebar = document.getElementById('mySidebar');
        const sidebarButton = document.getElementById('openNav');
        const clickedElement = event.target;

        // Cek apakah yang diklik bukanlah bagian dari sidebar atau tombol yang membuka sidebar
        if (!sidebar.contains(clickedElement) && clickedElement !== sidebarButton) {
            closeSidebar(); // Menutup sidebar
        }
    });
});

// Fungsi untuk membuka sidebar
function openSidebar() {
    document.getElementById("mySidebar").classList.add("show");
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    document.getElementById("mySidebar").classList.remove("show");
}
