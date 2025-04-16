export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      complementary_herbs: {
        Row: {
          complementary_herb_id: string | null
          created_at: string | null
          herb_id: string | null
          id: string
          reason: string | null
        }
        Insert: {
          complementary_herb_id?: string | null
          created_at?: string | null
          herb_id?: string | null
          id?: string
          reason?: string | null
        }
        Update: {
          complementary_herb_id?: string | null
          created_at?: string | null
          herb_id?: string | null
          id?: string
          reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "complementary_herbs_complementary_herb_id_fkey"
            columns: ["complementary_herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complementary_herbs_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      conditions: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      contraindications: {
        Row: {
          created_at: string | null
          description: string
          herb_id: string | null
          id: string
          warning: string
        }
        Insert: {
          created_at?: string | null
          description: string
          herb_id?: string | null
          id?: string
          warning: string
        }
        Update: {
          created_at?: string | null
          description?: string
          herb_id?: string | null
          id?: string
          warning?: string
        }
        Relationships: [
          {
            foreignKeyName: "contraindications_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      ebooks: {
        Row: {
          author: string
          buy_link: string | null
          category: string
          cover_image: string | null
          created_at: string
          description: string
          id: string
          pages: number
          price: number
          publish_date: string
          title: string
          updated_at: string
        }
        Insert: {
          author: string
          buy_link?: string | null
          category: string
          cover_image?: string | null
          created_at?: string
          description: string
          id?: string
          pages: number
          price: number
          publish_date: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          buy_link?: string | null
          category?: string
          cover_image?: string | null
          created_at?: string
          description?: string
          id?: string
          pages?: number
          price?: number
          publish_date?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      growing: {
        Row: {
          created_at: string
          harvest: string | null
          herb_id: string | null
          id: string
          preservation: string | null
          soil_ph: string | null
          sunlight: string | null
          watering: string | null
        }
        Insert: {
          created_at?: string
          harvest?: string | null
          herb_id?: string | null
          id?: string
          preservation?: string | null
          soil_ph?: string | null
          sunlight?: string | null
          watering?: string | null
        }
        Update: {
          created_at?: string
          harvest?: string | null
          herb_id?: string | null
          id?: string
          preservation?: string | null
          soil_ph?: string | null
          sunlight?: string | null
          watering?: string | null
        }
        Relationships: []
      }
      herb_conditions: {
        Row: {
          condition_id: string | null
          created_at: string
          herb_id: string | null
          id: string
        }
        Insert: {
          condition_id?: string | null
          created_at?: string
          herb_id?: string | null
          id?: string
        }
        Update: {
          condition_id?: string | null
          created_at?: string
          herb_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "herb_conditions_condition_id_fkey"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "conditions"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_illnesses: {
        Row: {
          created_at: string
          effectiveness: string | null
          herb_id: string | null
          id: string
          illness_id: string | null
          notes: string | null
        }
        Insert: {
          created_at?: string
          effectiveness?: string | null
          herb_id?: string | null
          id?: string
          illness_id?: string | null
          notes?: string | null
        }
        Update: {
          created_at?: string
          effectiveness?: string | null
          herb_id?: string | null
          id?: string
          illness_id?: string | null
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "herb_illnesses_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "herb_illnesses_illness_id_fkey"
            columns: ["illness_id"]
            isOneToOne: false
            referencedRelation: "illnesses"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_ratings: {
        Row: {
          created_at: string | null
          herb_id: string | null
          id: string
          rating: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          rating: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "herb_ratings_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_suggestions: {
        Row: {
          created_at: string
          description: string
          herb_name: string
          id: string
          status: string | null
          suggested_by_email: string | null
        }
        Insert: {
          created_at?: string
          description: string
          herb_name: string
          id?: string
          status?: string | null
          suggested_by_email?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          herb_name?: string
          id?: string
          status?: string | null
          suggested_by_email?: string | null
        }
        Relationships: []
      }
      herb_symptoms: {
        Row: {
          created_at: string | null
          effectiveness: number | null
          evidence_level: string | null
          herb_id: string | null
          id: string
          symptom: string
        }
        Insert: {
          created_at?: string | null
          effectiveness?: number | null
          evidence_level?: string | null
          herb_id?: string | null
          id?: string
          symptom: string
        }
        Update: {
          created_at?: string | null
          effectiveness?: number | null
          evidence_level?: string | null
          herb_id?: string | null
          id?: string
          symptom?: string
        }
        Relationships: [
          {
            foreignKeyName: "herb_symptoms_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      herbal_chat_logs: {
        Row: {
          created_at: string | null
          id: string
          question: string
          response: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          question: string
          response: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          question?: string
          response?: string
          user_id?: string | null
        }
        Relationships: []
      }
      herbal_tea_recipes: {
        Row: {
          benefits: string[]
          created_at: string
          description: string
          herb_id: string | null
          id: string
          ingredients: string[]
          instructions: string[]
          name: string
          steeping_time: string
          updated_at: string
          water_temperature: string
        }
        Insert: {
          benefits?: string[]
          created_at?: string
          description: string
          herb_id?: string | null
          id?: string
          ingredients?: string[]
          instructions?: string[]
          name: string
          steeping_time: string
          updated_at?: string
          water_temperature: string
        }
        Update: {
          benefits?: string[]
          created_at?: string
          description?: string
          herb_id?: string | null
          id?: string
          ingredients?: string[]
          instructions?: string[]
          name?: string
          steeping_time?: string
          updated_at?: string
          water_temperature?: string
        }
        Relationships: [
          {
            foreignKeyName: "herbal_tea_recipes_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      herbs: {
        Row: {
          benefits: string | null
          body_parts: Json | null
          botanical_name: string | null
          category: string | null
          color: string | null
          contraindications: string | null
          created_at: string
          description: string
          fun_fact: string | null
          growing_conditions: Json
          health_conditions: string[]
          history: string | null
          id: string
          image_url: string | null
          interactions: string[]
          medicinal_properties: string[]
          name: string
          preparation_methods: string | null
          safety_warnings: string[]
          scientific_name: string
          traditional_uses: string[]
          updated_at: string
          usage_instructions: string[] | null
          uses: string[] | null
        }
        Insert: {
          benefits?: string | null
          body_parts?: Json | null
          botanical_name?: string | null
          category?: string | null
          color?: string | null
          contraindications?: string | null
          created_at?: string
          description: string
          fun_fact?: string | null
          growing_conditions?: Json
          health_conditions?: string[]
          history?: string | null
          id?: string
          image_url?: string | null
          interactions?: string[]
          medicinal_properties?: string[]
          name: string
          preparation_methods?: string | null
          safety_warnings?: string[]
          scientific_name: string
          traditional_uses?: string[]
          updated_at?: string
          usage_instructions?: string[] | null
          uses?: string[] | null
        }
        Update: {
          benefits?: string | null
          body_parts?: Json | null
          botanical_name?: string | null
          category?: string | null
          color?: string | null
          contraindications?: string | null
          created_at?: string
          description?: string
          fun_fact?: string | null
          growing_conditions?: Json
          health_conditions?: string[]
          history?: string | null
          id?: string
          image_url?: string | null
          interactions?: string[]
          medicinal_properties?: string[]
          name?: string
          preparation_methods?: string | null
          safety_warnings?: string[]
          scientific_name?: string
          traditional_uses?: string[]
          updated_at?: string
          usage_instructions?: string[] | null
          uses?: string[] | null
        }
        Relationships: []
      }
      herbs_data: {
        Row: {
          benefits: string[] | null
          category: string
          color: string | null
          created_at: string | null
          description: string | null
          harvest_season: string | null
          id: string
          image_url: string | null
          name: string
          origin: string | null
          preparations: string[] | null
          safety_notes: string | null
          scientific_name: string
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          benefits?: string[] | null
          category: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          harvest_season?: string | null
          id?: string
          image_url?: string | null
          name: string
          origin?: string | null
          preparations?: string[] | null
          safety_notes?: string | null
          scientific_name: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          benefits?: string[] | null
          category?: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          harvest_season?: string | null
          id?: string
          image_url?: string | null
          name?: string
          origin?: string | null
          preparations?: string[] | null
          safety_notes?: string | null
          scientific_name?: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      herbs_new: {
        Row: {
          benefits: string[] | null
          category: string | null
          description: string | null
          id: string
          image_url: string | null
          name: string
        }
        Insert: {
          benefits?: string[] | null
          category?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
        }
        Update: {
          benefits?: string[] | null
          category?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
        }
        Relationships: []
      }
      illnesses: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          symptoms: string[] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          symptoms?: string[] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          symptoms?: string[] | null
        }
        Relationships: []
      }
      medicinal_uses: {
        Row: {
          condition: string
          created_at: string | null
          description: string
          effectiveness: string
          herb_id: string | null
          id: string
        }
        Insert: {
          condition: string
          created_at?: string | null
          description: string
          effectiveness: string
          herb_id?: string | null
          id?: string
        }
        Update: {
          condition?: string
          created_at?: string | null
          description?: string
          effectiveness?: string
          herb_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "medicinal_uses_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      preparation_methods: {
        Row: {
          created_at: string | null
          herb_id: string | null
          id: string
          instructions: string
          method: string
        }
        Insert: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          instructions: string
          method: string
        }
        Update: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          instructions?: string
          method?: string
        }
        Relationships: [
          {
            foreignKeyName: "preparation_methods_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string
          email: string
          id: string
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          status?: string | null
        }
        Relationships: []
      }
      user_favorites: {
        Row: {
          created_at: string | null
          herb_id: string | null
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          id: string
          is_premium: boolean | null
          role: string | null
        }
        Insert: {
          created_at?: string
          id: string
          is_premium?: boolean | null
          role?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_premium?: boolean | null
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
