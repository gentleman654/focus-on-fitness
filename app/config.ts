/*
 * SITE CONFIGURATION
 *
 * Central place for all site-wide constants.
 * Change a value here → it updates everywhere on the site.
 *
 * Why this pattern?
 *   - Single source of truth: no hunting through 6 files to update a phone number
 *   - Type-safe: TypeScript ensures every component uses the right shape
 *   - Easy handoff: gym owner (or you) edits ONE file to customize everything
 */

export const SITE_CONFIG = {
  // Gym Identity
  name: "Focus on Fitness",
  tagline: "Where dedication meets transformation. Your journey starts here.",

  // Contact
  phone: "9797601900",
  phoneFormatted: "+91 9797601900",
  whatsappUrl:
    "https://wa.me/919797601900?text=Hi%20Focus%20on%20Fitness!%20I%27m%20interested%20in%20joining%20the%20gym.%20Please%20share%20the%20details.",

  // Location
  address: {
    line1: "Focus on Fitness",
    line2: "2nd Floor, City centre Mall",
    line3: "Pathankot, Punjab - 145001",
  },

  // Social Media (update these with real URLs)
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },

  // Google Maps embed URL
  // To update: Google Maps → Search gym → Share → Embed a map → Copy src URL
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1768214924873!2d75.65111391136858!3d32.27291460946799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f6dba2e0f95%3A0x5768f8f6bce36811!2sFocus%20on%20Fitness%20Gyms!5e1!3m2!1sen!2sin!4v1774634721795!5m2!1sen!2sin",
} as const;

/*
 * "as const" makes this object deeply readonly.
 * TypeScript will error if any component tries to modify these values.
 * This is a best practice for configuration objects.
 */
