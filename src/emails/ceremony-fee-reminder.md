---
subject: Your ceremony fees are due for your {Booking_TypeOfBooking}
preheader: Ceremony payment needed 
hidePreheader: true
headline: Your ceremony booking
---

Hi {Booking_Addressee1} and {Booking_Addressee2}

## Reminder: Your ceremony fees are due
Please visit [leeds.gov.uk](https://www.leeds.gov.uk/births-deaths-and-marriages/ceremonies) to pay £{Booking_FeeAmountPaid} for your {Booking_TypeOfBooking} ceremony or call us on <a href="tel:+441132224408">0113 2224408</a> to make payment. If we do not receive a payment in the next 28 days we may cancel your ceremony. {Booking_LetterAdditionalText}


## Provisional ceremony details:
Venue for the {Booking_TypeOfBooking}: {Booking_Venues_Name}

Date: {Booking_DateOfCeremony}

Time: {Booking_TimeOfCeremony}

Booking reference: {Booking_pkId} (You will need this reference number when paying the final ceremony fee)


## Cancellations and changes
If the ceremony is not happening, please email <a href="mailto:{Booking_District_EmailAddress}">{Booking_District_EmailAddress}</a> as soon as possible to change or cancel it. Leeds Register Office reserves the right to cancel your ceremony if you fail to pay the ceremony fee within 2 months of the {Booking_TypeOfBooking}.


{% render "partials/ceremony-privacy-t&c.md" %}
