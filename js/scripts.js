// Full Name Validation (reusable function)
function isValidFullName(name) {
    return /^[A-Za-z\s]+$/.test(name.trim());
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const message = document.getElementById('message').value.trim();
        const wordCount = message.split(/\s+/).filter(Boolean).length;

        if (!isValidFullName(name)) {
            alert("Full Name must contain only letters and spaces. No numbers or symbols allowed.");
            return;
        }

        if (wordCount < 10) {
            alert("Message must be at least 10 words.");
            return;
        }

        alert("Thank you for reaching out. Your message has been sent successfully.");
        contactForm.reset();
    });
}

// Donation Form Submission
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const amount = parseFloat(document.getElementById('amount').value.trim());
        const paymentMethod = document.getElementById('paymentMethod').value;

        if (!isValidFullName(name)) {
            alert("Full Name must contain only letters and spaces. No numbers or symbols allowed.");
            return;
        }

        if (isNaN(amount) || amount < 10) {
            alert("Donation amount must be at least RM10.");
            return;
        }

        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        alert("Thank you for your generous donation!");
        donationForm.reset();
    });
}

function checkDonationEligibility() {
    var donationAmount = document.getElementById('donationAmount').value;
    var minDonation = 10;

    if (donationAmount < minDonation) {
        alert("The donation amount must be at least $" + minDonation);
    } else {
        alert("Thank you for your donation of $" + donationAmount);
    }
}

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides();

 $(document).ready(function () {
            // Define static events including public holidays
            var publicHolidays = [
                { title: 'New Year\'s Day', start: '2025-01-01', color: '#ff6666', description: 'Celebrate the start of the year' },
                { title: 'Labour Day', start: '2025-05-01', color: '#ff6666', description: 'Honoring workers around the world' },
                { title: 'Independence Day', start: '2025-08-15', color: '#ff6666', description: 'Celebrating national independence' },
                { title: 'Christmas', start: '2025-12-25', color: '#ff6666', description: 'A time for family and giving' }
            ];

            // Initialize FullCalendar
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },

                editable: false,  // Prevent events from being edited

                events: [
                    // Static events (including public holidays)
                    ...publicHolidays,

                    // Your own events (example charity events)
                    { title: 'New Year Kindness Drive', start: '2025-01-15', description: 'Kick off the year by helping the homeless.' },
                    { title: 'Valentine’s Charity Bake Sale', start: '2025-02-14', description: 'Support love through delicious giving.' },
                    { title: 'March Tree Planting', start: '2025-03-10', description: 'Join us in a reforestation effort.' },
                    { title: 'April School Supply Drive', start: '2025-04-20', description: 'Help underprivileged students prepare for school.' },
                    { title: 'Food Drive Distribution', start: '2025-05-05', description: 'Distributing food to local families.' },
                    { title: 'Health Awareness Campaign', start: '2025-06-12', description: 'Free health check-ups and awareness talks.' },
                    { title: 'Volunteer Appreciation Day', start: '2025-07-18', description: 'Celebrating the efforts of our volunteers.' },
                    { title: 'August Backpack Giveaway', start: '2025-08-22', description: 'Providing backpacks to children in need.' },
                    { title: 'Community Clean-Up', start: '2025-09-09', description: 'Join us to clean our parks and streets.' },
                    { title: 'October Blood Donation Drive', start: '2025-10-14', description: 'Donate blood, save lives.' },
                    { title: 'Thanksgiving Food Basket Prep', start: '2025-11-23', description: 'Prepare food baskets for families in need.' },
                    { title: 'December Toy Drive', start: '2025-12-12', description: 'Bring joy to children with your toy donations.' }
                ],

                eventClick: function (event) {
                    if (event.description) {
                        alert(event.title + "\n\n" + event.description);
                    }
                }
            });
        });

