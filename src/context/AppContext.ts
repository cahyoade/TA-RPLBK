import { createContext } from 'react';

export type Artwork = {
    id: number;
    api_model: string;
    api_link: string;
    is_boosted: boolean;
    title: string;
    alt_titles: null | string[];
    thumbnail: {
      lqip: string;
      width: number;
      height: number;
      alt_text: string;
    };
    main_reference_number: string;
    has_not_been_viewed_much: boolean;
    boost_rank: null | number;
    date_start: number;
    date_end: number;
    date_display: string;
    date_qualifier_title: string;
    date_qualifier_id: null | number;
    artist_display: string;
    place_of_origin: string;
    description: string;
    dimensions: string;
    dimensions_detail: [
      {
        depth_cm: number;
        depth_in: number;
        width_cm: number;
        width_in: number;
        height_cm: number;
        height_in: number;
        diameter_cm: number;
        diameter_in: number;
        clarification: null | string;
      }
    ];
    medium_display: string;
    inscriptions: null | string[];
    credit_line: string;
    catalogue_display: null;
    publication_history: null;
    exhibition_history: null;
    provenance_text: null;
    edition: null;
    publishing_verification_level: string;
    internal_department_id: number;
    fiscal_year: number;
    fiscal_year_deaccession: null;
    is_public_domain: boolean;
    is_zoomable: boolean;
    max_zoom_window_size: number;
    copyright_notice: null;
    has_multimedia_resources: boolean;
    has_educational_resources: boolean;
    has_advanced_imaging: boolean;
    colorfulness: number;
    color: {
      h: number;
      l: number;
      s: number;
      percentage: number;
      population: number;
    };
    latitude: number;
    longitude: number;
    latlon: string;
    is_on_view: boolean;
    on_loan_display: null;
    gallery_title: string;
    gallery_id: number;
    nomisma_id: null;
    artwork_type_title: string;
    artwork_type_id: number;
    department_title: string;
    department_id: string;
    artist_id: number;
    artist_title: string;
    alt_artist_ids: number[];
    artist_ids: number[];
    artist_titles: string[];
    category_ids: string[];
    category_titles: string[];
    term_titles: string[];
    style_id: string;
    style_title: string;
    alt_style_ids: string[];
    style_ids: string[];
    style_titles: string[];
    classification_id: string;
    classification_title: string;
    alt_classification_ids: string[];
    classification_ids: string[];
    classification_titles: string[];
    subject_id: string;
    alt_subject_ids: string[];
    subject_ids: string[];
    subject_titles: string[];
    material_id: string;
    alt_material_ids: string[];
    material_ids: string[];
    material_titles: string[];
    technique_id: string;
    alt_technique_ids: string[];
    technique_ids: string[];
    technique_titles: string[];
    theme_titles: string[];
    image_id: string;
    alt_image_ids: string[];
    document_ids: string[];
    sound_ids: string[];
    video_ids: never[];
    text_ids: never[];
    section_ids: never[];
    section_titles: never[];
    site_ids: never[];
    suggest_autocomplete_all: {
      input: string[];
      contexts: {
        groupings: string[];
      };
    }[];
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
  };
  



type AppContext = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    data: Artwork[];
    isLoggedIn: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export const AppContext = createContext<AppContext>({
    setIsLoggedIn: () => {},
    data: [],
    isLoggedIn: false,
    setIsLoading: () => {}
})