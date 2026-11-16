---
subject: Notice appointment confirmed on {Appointment_AppointmentDate} at {Appointment_StartTime}
preheader: Giving Notice Appointment 
hidePreheader: true
headline: Appointment confirmed
---

Hi {Appointment_LetterRecipient}

Your notice appointment is booked for:

Date: {Appointment_AppointmentDate} 

Time: {Appointment_StartTime}

Location: {Appointment_Office_Address1}, {Appointment_Office_Address2}, {Appointment_Office_Town}, {Appointment_Office_PostCode}

{% include "partials/map-button.html" %}

Customer reference: {Appointment_Id}

Please arrive 10 minutes before your appointment; late arrival will mean that you will not be seen and your appointment will be rebooked.


## Documents
You both must bring a recent passport photo (if one of you is not British, Irish or have EU settled status).

> {MarriageAppointment_Notice1Name}{CivilAppointment_Notice1Name} who is {MarriageAppointment_Notice1NationalityText} {CivilAppointment_Notice1NationalityText} must bring:
> {Appointment_Required_Documents_Contact_1}

> {MarriageAppointment_Notice2Name}{CivilAppointment_Notice2Name} who is {MarriageAppointment_Notice2NationalityText}{CivilAppointment_Notice2NationalityText} (if they are giving notice in Leeds) must bring:
> {Appointment_Required_Documents_Contact_2}


For further information please see the attached Giving Notice checklist regarding the documents you will need to bring to the appointment.

## eVisa
If you have an eVisa you must get a sharecode to prove your immigration status at the appointment.

{% include "partials/sharecode-button.html" %}

## Interpreters
You must bring your own interpreter to the appointment if either you or your partner struggles to speak or understand English. Please be aware, you are not allowed to translate on behalf of each other.


## Your ceremony venue
Legally your ceremony must take place at the venue named on your notice. If after giving notice, you want to change the ceremony venue you will need to book and pay for another notice appointment.


## If your ceremony is in another country
  - Please be aware not all countries require a Certificate of no impediment (CONI). You must check with the countries local marriage/civil partnership authorities.
  - At your appointment you must tell us the location of the marriage or civil partnership
  - You should check with the local authorities in the country where you intend to marry or form a civil partnership to find out how long a Certificate of No impediment is valid for under local law and what they want to appear on the CONI for the place of marriage/civil partnership (for example: Athens, Greece or The City Hall, Lindos, Rhodes, Greece)
  - The CONI will be issued 29 days after your appointment.
  - You should also check if you [need documents legalised](https://www.gov.uk/get-document-legalised). You might need to do this if the marriage/civil partnership authority in another country asked you to to provide legalised UK documents. 


{% include "partials/appt-change-privacy.md" %}
