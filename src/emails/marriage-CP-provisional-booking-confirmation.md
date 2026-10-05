---
subject: Confirmation of your ceremony booking on {Booking_DateOfCeremony} at {Booking_Venues_Name}
preheader: Registrars ceremony booking 
hidePreheader: true
headline: Your ceremony booking
---

Dear {Booking_Addressee1} and {Booking_Addressee2}

## Provisional booking details:
Your ceremony is at: {Booking_Venues_Name}

Date: {Booking_DateOfCeremony}

Time: {Booking_TimeOfCeremony}

Booking reference: {Booking_pkId} (You will need this reference number when paying the ceremony fee). {Booking_LetterAdditionalText}

> This is a provisional booking only and does not guarantee that your ceremony will take place. This booking cannot be used as evidence for a visa application that you are intending to marry or form a civil partnership in the UK.


## To confirm your booking, you must:
  - Give notice within one year of the date of the {Booking_TypeOfBooking} and no less than 29 days before the {Booking_TypeOfBooking} ceremony. To book an appointment in Leeds please visit [leeds.gov.uk](https://www.leeds.gov.uk/births-deaths-and-marriages/ceremonies/giving-your-notice-of-marriage-or-civil-partnership). It is your responsibility to ensure that the legal notice appointment is completed.
  - [Pay the remaining ceremony fee](https://leeds.sishost.co.uk/Agenda/NewOnlineBookings/appointment.html?pg=2b987999-5fce-4258-b99d-d225c775ae31) of £{Booking_FeeAmountPaid} at least 3 months before the date of the ceremony. You can pay online or by calling us on <a href="tel:+441132224408">0113 2224408</a>.


## Your ceremony venue
{% render "partials/warning-message.html" %}

Legally your ceremony must take place at the venue named on your notice. If after [giving notice](https://www.leeds.gov.uk/births-deaths-and-marriages/ceremonies/giving-your-notice-of-marriage-or-civil-partnership), you want to change the ceremony venue you will need to book and pay for another notice appointment.


## Cancellations and changes
The booking fee is non-refundable and any changes to the date, time or venue will incur an administration fee. If you are unable to attend this ceremony, please email <a href="mailto:{Booking_District_EmailAddress}">{Booking_District_EmailAddress}</a> to change or cancel it. Leeds Register Office reserves the right to cancel your ceremony if you fail to pay the ceremony fee within 3 months of the {Booking_TypeOfBooking}.


{% render "partials/ceremony-privacy-t&c.md" %}
