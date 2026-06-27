export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  transmission: 'Manual' | 'Automatic';
  kilometer: number;
  price: number;
  condition: 'Bekas' | 'Baru';
  image: string;
  featured?: boolean;
  passengers: number;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  message: string;
}

export interface VerificationItem {
  id: string;
  name: string;
  email: string;
  ktp_number: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at?: string;
}
