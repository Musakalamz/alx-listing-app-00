// interfaces/index.ts

/**
 * Defines the props for the reusable Card component.
 * Extend this interface as the project grows.
 */
export interface CardProps {
  id: string; // Unique identifier for the card (property id)
  title: string; // Property title (e.g., "Cozy Apartment in Lagos")
  description: string; // Short description of the property
  imageUrl: string; // URL for the property image
  price?: number; // Optional price per night
  location?: string; // Optional location (e.g., "Lagos, Nigeria")
}

/**
 * Defines the props for the reusable Button component.
 * Extend this interface to handle variants, sizes, etc.
 */
export interface ButtonProps {
  label: string; // Text shown on the button
  onClick?: () => void; // Optional click handler
  type?: "button" | "submit" | "reset"; // Button type
  disabled?: boolean; // Disable state
}
