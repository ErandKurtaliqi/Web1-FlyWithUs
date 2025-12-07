function bookFlight() {
const name = document.getElementById("name").value;
const from = document.getElementById("from").value;
const to = document.getElementById("to").value;

if(!name || !from || !to){
alert("Please fill all fields!");
} else {
alert(`Flight booked for ${name}!\nRoute: ${from} → ${to}`);
}
}
// Vendos vitin aktual në footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Logjika për booking form
const bookingForm = document.getElementById("bookingForm");
const bookingSuccess = document.getElementById("bookingSuccess");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const from = document.getElementById("from").value.trim();
        const to = document.getElementById("to").value.trim();
        const depart = document.getElementById("depart").value;
        const ret = document.getElementById("return").value;
        const passengers = document.getElementById("passengers").value;

        if (!name || !email || !from || !to || !depart) {
            alert("Please fill in all required fields before booking.");
            return;
        }

        // Mesazh i thjeshtë suksesi
        if (bookingSuccess) {
            bookingSuccess.classList.remove("hidden");
            bookingSuccess.textContent =
                `Thank you, ${name}! We received your request from ${from} to ${to}` +
                ` for ${passengers} passenger(s) on ${depart}` +
                (ret ? ` (returning on ${ret}).` : ".") +
                " We will contact you soon at " + email + ".";
        }

        // Opsionale: pastro fushat pas submit
        bookingForm.reset();
    });
}

// Kur klikon “View Deals” te destinacionet, mbush automatikisht fushën “To”
document.querySelectorAll(".card-btn").forEach(button => {
    button.addEventListener("click", () => {
        const city = button.getAttribute("data-city");
        const toInput = document.getElementById("to");

        // Scroll te forma e booking
        const bookingSection = document.getElementById("booking");
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth" });
        }

        if (toInput && city) {
            toInput.value = city;
        }
    });
});
