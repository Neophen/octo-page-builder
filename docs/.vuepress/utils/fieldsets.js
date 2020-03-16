export const filmFieldset = {
  // cover_img: {
  //   display: "Cover image",
  //   type: "image",
  //   validate: "required",
  //   container: "img_film",
  //   folder: "film_covers",
  //   quality: 2,
  //   width: 960,
  //   height: 300
  // },
  // film_still_imgs: {
  //   display: "Film stills",
  //   type: "images",
  //   max_files: 3,
  //   container: "img_film",
  //   folder: "film_stills",
  //   quality: 3,
  //   width: 640,
  //   height: 360
  // },
  title: {
    display: "Film title",
    type: "text",
    validate: "required|max:150",
    localizable: true
  },
  // film_tagline_synopsis: {
  //   display: "Tagline & synopsis",
  //   type: "rich-text",
  //   validate: "required|max:150",
  //   localizable: true
  // },
  section_title_director: {
    display: "Director",
    type: "section"
  },
  film_directors: {
    display: "Director(s) full name",
    type: "list"
  },
  // film_director_img: {
  //   display: "Director's photo",
  //   type: "avatar",
  //   validate: "required",
  //   quality: 2,
  //   width: 300,
  //   height: 300,
  //   folder: "film_directors",
  //   container: "img_film",
  // },
  film_directors_bio: {
    display: "Director's bio",
    type: "textarea",
    validate: "required|max:1000",
    localizable: true
  },
  section_title_metadata: {
    display: "Metadata",
    type: "section"
  },
  film_type: {
    display: "Film type",
    type: "radio-group",
    validate: "required",
    default: "feature",
    options: {
      feature: "Feature film",
      short: "Short film"
    }
  },
  film_trailer_link: {
    display: "Youtube Trailer link",
    type: "text",
    validate: "url"
  },
  film_original_title: {
    display: "Original film title",
    type: "text"
  },
  duration_in_minutes: {
    display: "Film duration in minutes",
    type: "number",
    validate: "required",
    min: 0,
  },
  age_restrictions: {
    display: "Age restriction",
    type: "single-tag",
    validate: "required",
    placeholder: "Please select age restriction",
    can_add: true,
    add_config: {
      title: "Add age restriction",
      taxonomy: "age_restrictions",
      fieldset: "taxonomies/age_restrictions_co",
    },
    options: [
      {
        label: 'N-7',
        value: 'n-7'
      },
      {
        label: 'N-13',
        value: 'n-13'
      },
      {
        label: 'N-14',
        value: 'n-14'
      },
      {
        label: 'N-16',
        value: 'n-16'
      },
      {
        label: 'N-18',
        value: 'n-18'
      },
      {
        label: 'F - family friendly',
        value: 'f-family-friendly'
      },
    ],
  },
  film_countries: {
    display: "Countries",
    type: "countries",
    validate: "required",
    placeholder: "Select countries...",
  },
  film_release_year: {
    display: "Year of the release",
    type: "year",
    validate: "required",
    placeholder: "Please select a year..",
    min: 2000,
  },
  film_external_link: {
    display: "Film website or other external link",
    type: "text",
    validate: "url"
  },
  genres: {
    display: "Select up to 3 genres",
    type: "tags",
    validate: "required",
    max_items: 3,
    can_add: true,
    add_config: {
      title: "Add a genre",
      taxonomy: "genres",
      fieldset: "taxonomies/genres_co",
    },
    options: [
      {
        label: 'Animation',
        value: 'animation'
      },
      {
        label: 'Drama',
        value: 'drama'
      },
      {
        label: 'Thriller',
        value: 'thriller'
      },
      {
        label: 'Historical',
        value: 'historical'
      },
      {
        label: 'Crime',
        value: 'crime'
      },
      {
        label: 'Musical',
        value: 'musical'
      },
    ],
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
  section_title_crew: {
    display: "Crew",
    type: "section"
  },
  film_producers: {
    display: "Producer(s)",
    type: "list"
  },
  film_scriptwriters: {
    display: "Scriptwriter(s)",
    type: "list"
  },
  film_composers: {
    display: "Music composer(s)",
    type: "list"
  },
  film_camera: {
    display: "Camera",
    type: "list"
  },
  film_actors: {
    display: "Starring",
    type: "list"
  },
  section_title_award_1: {
    display: "Award 1",
    type: "section"
  },
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
  section_title_award_2: {
    display: "Award 2",
    type: "section"
  },
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


export const loginFieldset = {
  email: {
    display: 'Email',
    type: 'text',
    validate: 'required|email',
    textType: 'email',
    autocomplete: 'email',
    placeholder: 'Email...',
  },
  password: {
    display: 'Password',
    type: 'password',
    validate: 'required',
    autocomplete: 'password',
    placeholder: 'Password...',
  },
}

export const loginFieldsetNumbered = {
  email: {
    display: 'Email',
    type: 'text',
    number: 1,
    validate: 'required|email',
    textType: 'email',
    autocomplete: 'email',
    placeholder: 'Email...',
  },
  password: {
    display: 'Password',
    type: 'password',
    number: 2,
    validate: 'required',
    autocomplete: 'password',
    placeholder: 'Password...',
  },
}

export const contactFieldset = {
  email: {
    display: "Email",
    type: "text",
    validate: "email|max:100",
    icon: "contact-mail",
    textType: "email"
  },
  phone: {
    display: "Phone",
    type: "text",
    validate: "max:100",
    icon: "contact-phone",
  },
  facebook: {
    display: "Link to Facebook profile",
    type: "text",
    icon: "contact-facebook",
    validate: "max:100",
  },
  slack: {
    display: "Slack username",
    type: "text",
    validate: "max:100",
    icon: "contact-slack",
  }
};

export const contactFieldsetNumbered = {
  email: {
    display: "Email",
    type: "text",
    number: 1,
    validate: "email|max:100",
    icon: "contact-mail",
    textType: "email"
  },
  phone: {
    display: "Phone",
    type: "text",
    number: 2,
    validate: "max:100",
    icon: "contact-phone",
  },
  facebook: {
    display: "Link to Facebook profile",
    type: "text",
    number: 3,
    icon: "contact-facebook",
    validate: "max:100",
  },
  slack: {
    display: "Slack username",
    type: "text",
    number: 4,
    validate: "max:100",
    icon: "contact-slack",
  }
};


export const inputsFieldset = {
  section_input: {
    display: "Inputs",
    type: "section"
  },
  text: {
    display: "Text",
    type: "text",
    placeholder: 'Text input...',
    validate: "max:150",
    localizable: true
  },
  textarea: {
    display: "Textarea",
    type: "textarea",
    placeholder: 'Textarea input...',
    validate: "max:1000",
    localizable: true
  },
  rich_text: {
    display: "Rich text input",
    type: "textarea",
    placeholder: 'Rich text input...',
    localizable: true
  },
  radio_group: {
    display: "Radio group",
    type: "radio-group",
    default: "default",
    options: {
      default: "Default",
      other: "Other"
    }
  },
  number: {
    display: "Number",
    placeholder: 'Number input...',
    type: "number",
    min: 0,
  },

  year: {
    display: "Year",
    type: "year",
    placeholder: "Please select a year..",
    min: 2000,
  },
  section_tags: {
    display: "Tags",
    type: "section"
  },
  tag: {
    display: "Tag",
    type: "single-tag",
    placeholder: "Please select a tag...",
    can_add: true,
    add_config: {
      title: "Add age restriction",
      taxonomy: "age_restrictions",
      fieldset: "taxonomies/age_restrictions_co",
    },
    options: [
      {
        label: 'Tag 1',
        value: 'tag-1'
      },
      {
        label: 'Tag 2',
        value: 'tag-2'
      },
      {
        label: 'Tag 3',
        value: 'tag-3'
      },
      {
        label: 'Tag 4',
        value: 'tag-4'
      },
      {
        label: 'Tag 5',
        value: 'tag-5'
      },
      {
        label: 'Tag 6',
        value: 'tag-6'
      },
    ],
  },
  tags: {
    display: "Tags",
    placeholder: "Select tags..",
    type: "tags",
    max_items: 3,
    can_add: true,
    add_config: {
      title: "Add a genre",
      taxonomy: "genres",
      fieldset: "taxonomies/genres_co",
    },
    options: [
      {
        label: 'Tag 1',
        value: 'tag-1'
      },
      {
        label: 'Tag 2',
        value: 'tag-2'
      },
      {
        label: 'Tag 3',
        value: 'tag-3'
      },
      {
        label: 'Tag 4',
        value: 'tag-4'
      },
      {
        label: 'Tag 5',
        value: 'tag-5'
      },
      {
        label: 'Tag 6',
        value: 'tag-6'
      },
    ],
  },
  list: {
    display: "List",
    type: "list",
    placeholder: 'List input...',
    localizable: true
  },
  countries: {
    display: "Countries",
    type: "countries",
    placeholder: "Select countries...",
  },
  languages: {
    display: "Languages",
    type: "languages",
    placeholder: "Select languages..",
  },
  section_Images: {
    display: "Images",
    type: "section"
  },
  avatar: {
    display: "Avatar",
    type: "avatar",
    quality: 1,
    width: 390,
    height: 390,
  },
  image: {
    display: "Image",
    type: "image",
    value: "/DianaAndMe.jpg",
    width: 1920,
    height: 1080
  },
  // film_still_imgs: {
  //   display: "Film stills",
  //   type: "images",
  //   max_files: 3,
  //   container: "img_film",
  //   folder: "film_stills",
  //   quality: 3,
  //   width: 640,
  //   height: 360
  // },
};

export const inputsFieldsetErrors = {
  text: ['text input is required'],
  textarea: ['textarea input is required'],
  rich_text: ['rich text input is required'],
  radio_group: ['radio group input is required'],
  number: ['number input is required'],
  year: ['year input is required'],
  tag: ['tag input is required'],
  tags: ['tags input is required'],
  list: ['list input is required'],
  countries: ['countries input is required'],
  languages: ['languages input is required'],
  avatar: ['avatar input is required'],
  image: ['image input is required'],
}