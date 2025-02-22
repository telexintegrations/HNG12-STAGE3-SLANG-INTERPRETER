export const integrationSpecSettings = {
    "data": {
      "date": {
        "created_at": "2025-02-21",
        "updated_at": "2025-02-21"
      },
      "descriptions": {
        "app_description": "A slang interpreter integration that detects slang in messages and replaces them with their full forms for clearer communication.",
        "app_logo": "https://iili.io/Jcshqe2.webp",
        "app_name": "Slang interpreter.",
        "app_url": "https://fsx70m97-4000.uks1.devtunnels.ms/",
        "background_color": "#HEXCODE"
      },
      "integration_category": "Email & Messaging",
      "integration_type": "modifier",
      "is_active": true,
      "output": [
        {
          "label": "Interpreted Message",
          "value": true
        }
      ],
      "key_features": [
        "Detects and replaces common slang terms in messages",
        "Improves clarity by expanding slang into full expressions",
        "Customizable settings for sensitivity and interpretation style",
        "Real-time processing for seamless communication"
      ],
      "permissions": {
        "monitoring_user": {
          "always_online": true,
          "display_name": "Slang Interpreter Monitor"
        }
      },
      "settings": [
        {
          "label": "Enable Interpreter",
          "type": "checkbox",
          "required": true,
          "default": "Yes"
        },
        {
          "label": "Processing Delay (ms)",
          "type": "number",
          "required": true,
          "default": "500"
        },
        {
          "label": "Replacement Sensitivity",
          "type": "dropdown",
          "required": true,
          "default": "Moderate",
          "options": ["High", "Moderate", "Low"]
        },
        {
          "label": "Interpretation Style",
          "type": "dropdown",
          "required": false,
          "default": "Standard",
          "options": ["Standard", "Verbose", "Brief"]
        }
      ],
      "target_url": "https://fsx70m97-4000.uks1.devtunnels.ms/webhook"
    }
  }
  