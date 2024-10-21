        const amountInput = document.getElementById('amount');

        amountInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value) {
                value = parseInt(value, 10);
                e.target.value = formatRupiah(value);
            }
        });

        function formatRupiah(number) {
            let rupiah = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(number);
            return rupiah.replace(/^(\D+)/, 'Rp. ');
        }

        var modal = document.getElementById("thankYouModal");

        var closeModal = document.getElementById("closeModal");

        document.getElementById("donation-form").addEventListener("submit", function(event) {
            event.preventDefault();
            modal.style.display = "block";

            this.reset(); 
        });

        closeModal.onclick = function() {
            modal.style.display = "none";
        }