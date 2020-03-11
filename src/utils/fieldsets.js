export const filmFieldset = {
  cover_img: {
    display: "Cover image",
    validate: "required",
    max_files: 1,
    container: "img_film",
    folder: "film_covers",
    type: "image",
    quality: 2,
    width: 960,
    height: 300
  },
  film_still_imgs: {
    display: "Film stills",
    max_files: 3,
    container: "img_film",
    folder: "film_stills",
    type: "images",
    quality: 3,
    width: 640,
    height: 360
  },
  title: {
    display: "Film title",
    type: "text",
    validate: "required|max:150",
    localizable: true
  },
  film_tagline_synopsis: {
    display: "Tagline & synopsis",
    type: "redactor",
    validate: "required|max:150",
    localizable: true
  },
  section_title_director: { display: "Director", type: "section" },
  film_directors: { display: "Director(s) full name", type: "list" },
  film_director_img: {
    display: "Director's photo",
    validate: "required",
    max_files: 1,
    container: "img_film",
    folder: "film_directors",
    type: "avatar",
    quality: 2,
    width: 300,
    height: 300
  },
  film_directors_bio: {
    display: "Director's bio",
    validate: "required|max:1000",
    type: "textarea",
    localizable: true
  },
  section_title_metadata: { display: "Metadata", type: "section" },
  film_type: {
    display: "Film type",
    validate: "required",
    type: "radio-group",
    default: "feature",
    options: { feature: "Feature film", short: "Short film" }
  },
  film_trailer_link: {
    display: "Youtube Trailer link",
    type: "text",
    validate: "url"
  },
  film_original_title: { display: "Original film title", type: "text" },
  duration_in_minutes: {
    display: "Film duration in minutes",
    type: "minutes",
    validate: "required"
  },
  age_restrictions: {
    display: "Age restriction",
    placeholder: "Please select age restriction",
    max_items: 1,
    type: "single-tag",
    modal_title: "Add age restriction",
    taxonomy: "age_restrictions",
    fieldset: "taxonomies/age_restrictions_co",
    validate: "required"
  },
  film_countries: {
    display: "Countries",
    placeholder: "Please select countries...",
    type: "countries",
    validate: "required"
  },
  film_release_year: {
    display: "Year of the release",
    placeholder: "Please select a year..",
    type: "year",
    start_year: 2000,
    validate: "required"
  },
  film_external_link: {
    display: "Film website or other external link",
    type: "text",
    validate: "url"
  },
  genres: {
    display: "Select up to 3 genres",
    max_items: 3,
    validate: "required",
    taxonomy: "genres",
    modal_title: "Add a genre",
    type: "tags",
    fieldset: "taxonomies/genres_co"
  },
  film_languages: {
    display: "Film language",
    type: "languages",
    validate: "required"
  },
  film_subtitles_language: {
    display: "Subtitle language",
    type: "languages",
    validate: "required"
  },
  section_title_crew: { display: "Crew", type: "section" },
  film_producers: { display: "Producer(s)", type: "list" },
  film_scriptwriters: { display: "Scriptwriter(s)", type: "list" },
  film_composers: { display: "Music composer(s)", type: "list" },
  film_camera: { display: "Camera", type: "list" },
  film_actors: { display: "Starring", type: "list" },
  section_title_award_1: { display: "Award 1", type: "section" },
  film_award_1_title: {
    display: "Award 1 title",
    type: "text",
    validate: "max:50",
    localizable: true
  },
  film_award_1_description: {
    display: "Award 1 description",
    type: "text",
    validate: "max:50",
    localizable: true
  },
  section_title_award_2: { display: "Award 2", type: "section" },
  film_award_2_title: {
    display: "Award 2 title",
    type: "text",
    validate: "max:50",
    localizable: true
  },
  film_award_2_description: {
    display: "Award 2 description",
    type: "text",
    validate: "max:50",
    localizable: true
  }
};

export const contactFieldset = {
  email: {
    label: "Email",
    icon: "contact-mail",
    validate: "email|max:100",
    type: "input",
    textType: "email"
  },
  phone: {
    label: "Phone",
    icon: "contact-phone",
    validate: "max:100",
    type: "input"
  },
  facebook: {
    label: "Link to Facebook profile",
    icon: "contact-facebook",
    validate: "max:100",
    type: "input"
  },
  slack: {
    label: "Slack username",
    icon: "contact-slack",
    validate: "max:100",
    type: "input"
  }
};
