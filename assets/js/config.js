/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 * File paths are relative so this template works inside /khwahish/ or any folder.
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Sumaiya with Wahid — Nikah Invitation",
    description: "You are warmly invited to celebrate the Nikah of Sumaiya Siddiqui with Wahid Patel.",
    image: "./og-image.jpg",
  },

  couple: {
    brideInitial: "S",
    groomInitial: "W",
    bride: {
      name: "Sumaiya Siddiqui",
      shortName: "Sumaiya",
      relation: "D/o",
      parents: "Late. Mr Nasir Siddiqui & Mrs Fatima Siddiqui",
    },
    groom: {
      name: "Wahid Patel",
      shortName: "Wahid",
      relation: "S/o",
      parents: "Mr. Fareed Patel & Mrs. Nasreen Patel",
    },
  },

  copy: {
    bismillah: "﷽",
    bismillahTranslation:
      "",
    welcomeLine: "We request the honour of your\npresence at the Nikah of",
    invitation:
      "",
    heroClosing:
      "as they begin their forever in\nfaith and love.",
    welcomeTitle: "A Blessed Beginning",
    welcomeBody:
      "With hearts full of gratitude, we warmly invite you to join us as we celebrate this beautiful beginning with the love, prayers, and blessings of our families.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can’t wait to celebrate with you.",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2027-01-07T17:00:00+05:30",
    date: "07th January 2027",
    day: "Thursday",
    time: "",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-placeholder.mp4",
    introPoster:
      "./media/intro-placeholder.webp",
    music: "./shukran-laka-rabbi.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./media/gallery/01.webp",
        alt: "A softly lit wedding detail",
        caption: "",
      },
      {
        src: "./media/gallery/02.webp",
        alt: "A joyful wedding celebration",
        caption: "",
      },
      {
        src: "./media/gallery/03.webp",
        alt: "Elegant wedding florals and table setting",
        caption: "",
      },
    ],
  },

  program: [
    {
      time: "After Asr",
      title: "Nikah Ceremony",
      note: "Jama Masjid, Papdy, Vasai",
    },
    {
      time: "07:00 PM",
      title: "Guest Arrival",
      note: "Samaj Unnati Mandal, Manikpur, Vasai",
    },
    {
      time: "08:00 PM",
      title: "Nikah Dinner",
      note: "A feast shared with love & blessings (7:00 PM – 10:00 PM)",
    },
  ],

  venue: {
    name: "Samaj Unnati Mandal",
    address:
      "Manikpur, Vasai West, Maharashtra",
    mapUrl: "https://maps.google.com/?q=Samaj+Unnati+Mandal+Sabha+Gruha+Manikpur+Vasai+West",
  },

  dressCode: {
    title: "Festive Formal",
    description:
      "Traditional or formal attire is encouraged. Sarees, lehengas, anarkalis, sherwanis, kurtas, suits, and formal dresses are all welcome. We kindly ask guests to avoid overly casual attire and white or ivory.",
    swatches: [
      "#7A1F2B",
      "#234638",
      "#C49A56",
      "#7A4968",
      "#31506B",
    ],
  },

  preWeddingEvents: [
    {
      name: "Nikah",
      date: "07th January 2027",
      time: "After Namaz-e-Asr",
      location: "Jama Masjid, Papdy, Vasai",
      mapLink: "https://maps.google.com/?q=Jama+Masjid+Papdy+Vasai+West+Maharashtra",
    },
    {
      name: "Nikah Dinner",
      date: "07th January 2027",
      time: "07:00 PM – 10:00 PM",
      location: "Samaj Unnati Mandal, Manikpur, Vasai",
      mapLink: "https://maps.google.com/?q=Samaj+Unnati+Mandal+Sabha+Gruha+Manikpur+Vasai+West",
    },
  ],

  rsvp: {
    deadline: "Kindly respond by December 25, 2026",
    contact: "For assistance, please contact the family",
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "Dietary notes or a message for the couple",
    },
  },

  theme: {
    ivory: "#F7EFE2",       /* warm bridal ivory */
    plum: "#5A4035",        /* deep warm cocoa */
    lavender: "#D8B7A6",    /* muted blush nude */
    mauve: "#B97D6D",       /* dusty rose */
    lilac: "#A8A28A",       /* soft sage taupe */
    champagne: "#B88A45",   /* antique gold */
  },
};
