export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  etl: {
    Tables: {
      candidato: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_candidato_candidato_spritesheet';
            columns: ['spritesheet_id'];
            isOneToOne: false;
            referencedRelation: 'candidato_spritesheet';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_cargo';
            columns: ['cargo_id'];
            isOneToOne: false;
            referencedRelation: 'cargo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_coligacao';
            columns: ['coligacao_id'];
            isOneToOne: false;
            referencedRelation: 'coligacao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_cor_raca';
            columns: ['cor_raca_id'];
            isOneToOne: false;
            referencedRelation: 'cor_raca';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_estado_civil';
            columns: ['estado_civil_id'];
            isOneToOne: false;
            referencedRelation: 'estado_civil';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_federacao';
            columns: ['federacao_id'];
            isOneToOne: false;
            referencedRelation: 'federacao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_genero';
            columns: ['genero_id'];
            isOneToOne: false;
            referencedRelation: 'genero';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_grau_instrucao';
            columns: ['grau_instrucao_id'];
            isOneToOne: false;
            referencedRelation: 'grau_instrucao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_ocupacao';
            columns: ['ocupacao_id'];
            isOneToOne: false;
            referencedRelation: 'ocupacao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_partido';
            columns: ['partido_id'];
            isOneToOne: false;
            referencedRelation: 'partido';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_situacao_candidatura';
            columns: ['situacao_candidatura_id'];
            isOneToOne: false;
            referencedRelation: 'situacao_candidatura';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_situacao_turno';
            columns: ['situacao_turno_id'];
            isOneToOne: false;
            referencedRelation: 'situacao_turno';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_candidato_unidade_eleitoral';
            columns: ['unidade_eleitoral_id'];
            isOneToOne: false;
            referencedRelation: 'unidade_eleitoral';
            referencedColumns: ['id'];
          },
        ];
      };
      candidato_35: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_143: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_220: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_221: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_297: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_298: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_426: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_427: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_546: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_547: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_619: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_35_620: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_143: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_220: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_221: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_297: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_298: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_426: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_427: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_546: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_547: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_42_619: {
        Row: {
          cargo_id: number | null;
          coligacao_id: number | null;
          cor_raca_id: number | null;
          cpf: string | null;
          data_nascimento: string | null;
          eleicao_id: number;
          email: string | null;
          estado_civil_id: number | null;
          federacao_id: number | null;
          genero_id: number | null;
          grau_instrucao_id: number | null;
          id: number;
          nome: string | null;
          nome_social: string | null;
          nome_urna: string | null;
          numero_eleitoral: string | null;
          numero_urna: string | null;
          ocupacao_id: number | null;
          partido_id: number | null;
          sequencial: string | null;
          sigla_uf: string | null;
          sigla_uf_nascimento: string | null;
          situacao_candidatura_id: number | null;
          situacao_turno_id: number | null;
          spritesheet_id: number | null;
          tipo_agremiacao: string | null;
          titulo_eleitoral: string | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
          x_sprite: number | null;
          y_sprite: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          coligacao_id?: number | null;
          cor_raca_id?: number | null;
          cpf?: string | null;
          data_nascimento?: string | null;
          eleicao_id?: number;
          email?: string | null;
          estado_civil_id?: number | null;
          federacao_id?: number | null;
          genero_id?: number | null;
          grau_instrucao_id?: number | null;
          id?: number;
          nome?: string | null;
          nome_social?: string | null;
          nome_urna?: string | null;
          numero_eleitoral?: string | null;
          numero_urna?: string | null;
          ocupacao_id?: number | null;
          partido_id?: number | null;
          sequencial?: string | null;
          sigla_uf?: string | null;
          sigla_uf_nascimento?: string | null;
          situacao_candidatura_id?: number | null;
          situacao_turno_id?: number | null;
          spritesheet_id?: number | null;
          tipo_agremiacao?: string | null;
          titulo_eleitoral?: string | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
          x_sprite?: number | null;
          y_sprite?: number | null;
        };
        Relationships: [];
      };
      candidato_spritesheet: {
        Row: {
          id: number;
          path: string | null;
        };
        Insert: {
          id: number;
          path?: string | null;
        };
        Update: {
          id?: number;
          path?: string | null;
        };
        Relationships: [];
      };
      cargo: {
        Row: {
          descricao: string | null;
          id: number;
        };
        Insert: {
          descricao?: string | null;
          id: number;
        };
        Update: {
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      coligacao: {
        Row: {
          composicao: string | null;
          id: number;
          nome: string | null;
          sequencial: string | null;
        };
        Insert: {
          composicao?: string | null;
          id: number;
          nome?: string | null;
          sequencial?: string | null;
        };
        Update: {
          composicao?: string | null;
          id?: number;
          nome?: string | null;
          sequencial?: string | null;
        };
        Relationships: [];
      };
      cor_raca: {
        Row: {
          descricao: string | null;
          id: number;
        };
        Insert: {
          descricao?: string | null;
          id: number;
        };
        Update: {
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      eleicao: {
        Row: {
          ano: string | null;
          codigo: string | null;
          codigo_tipo: string | null;
          data: string | null;
          descricao: string | null;
          id: number;
          nome_tipo: string | null;
          numero_turno: string | null;
          tipo_abrangencia: string | null;
        };
        Insert: {
          ano?: string | null;
          codigo?: string | null;
          codigo_tipo?: string | null;
          data?: string | null;
          descricao?: string | null;
          id: number;
          nome_tipo?: string | null;
          numero_turno?: string | null;
          tipo_abrangencia?: string | null;
        };
        Update: {
          ano?: string | null;
          codigo?: string | null;
          codigo_tipo?: string | null;
          data?: string | null;
          descricao?: string | null;
          id?: number;
          nome_tipo?: string | null;
          numero_turno?: string | null;
          tipo_abrangencia?: string | null;
        };
        Relationships: [];
      };
      eleicao_cargo: {
        Row: {
          cargo_id: number;
          eleicao_id: number;
        };
        Insert: {
          cargo_id: number;
          eleicao_id: number;
        };
        Update: {
          cargo_id?: number;
          eleicao_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_eleicao_cargo_cargo';
            columns: ['cargo_id'];
            isOneToOne: false;
            referencedRelation: 'cargo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_eleicao_cargo_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
        ];
      };
      eleicao_escopo: {
        Row: {
          eleicao_id: number;
          unidade_eleitoral_id: number;
        };
        Insert: {
          eleicao_id: number;
          unidade_eleitoral_id: number;
        };
        Update: {
          eleicao_id?: number;
          unidade_eleitoral_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_eleicao_escopo_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_eleicao_escopo_unidade_eleitoral';
            columns: ['unidade_eleitoral_id'];
            isOneToOne: false;
            referencedRelation: 'unidade_eleitoral';
            referencedColumns: ['id'];
          },
        ];
      };
      eleicao_partido: {
        Row: {
          eleicao_id: number;
          partido_id: number;
        };
        Insert: {
          eleicao_id: number;
          partido_id: number;
        };
        Update: {
          eleicao_id?: number;
          partido_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_eleicao_partido_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_eleicao_partido_partido';
            columns: ['partido_id'];
            isOneToOne: false;
            referencedRelation: 'partido';
            referencedColumns: ['id'];
          },
        ];
      };
      estado_civil: {
        Row: {
          codigo: string | null;
          descricao: string | null;
          id: number;
        };
        Insert: {
          codigo?: string | null;
          descricao?: string | null;
          id: number;
        };
        Update: {
          codigo?: string | null;
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      federacao: {
        Row: {
          composicao: string | null;
          id: number;
          nome: string | null;
          sigla: string | null;
        };
        Insert: {
          composicao?: string | null;
          id: number;
          nome?: string | null;
          sigla?: string | null;
        };
        Update: {
          composicao?: string | null;
          id?: number;
          nome?: string | null;
          sigla?: string | null;
        };
        Relationships: [];
      };
      genero: {
        Row: {
          codigo: string | null;
          descricao: string | null;
          id: number;
        };
        Insert: {
          codigo?: string | null;
          descricao?: string | null;
          id: number;
        };
        Update: {
          codigo?: string | null;
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      grau_instrucao: {
        Row: {
          codigo: string | null;
          descricao: string | null;
          id: number;
        };
        Insert: {
          codigo?: string | null;
          descricao?: string | null;
          id: number;
        };
        Update: {
          codigo?: string | null;
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      local_votacao: {
        Row: {
          endereco: string | null;
          id: number;
          municipio_id: number | null;
          nome: string | null;
          numero_local: string | null;
          numero_zona: string | null;
        };
        Insert: {
          endereco?: string | null;
          id: number;
          municipio_id?: number | null;
          nome?: string | null;
          numero_local?: string | null;
          numero_zona?: string | null;
        };
        Update: {
          endereco?: string | null;
          id?: number;
          municipio_id?: number | null;
          nome?: string | null;
          numero_local?: string | null;
          numero_zona?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_local_votacao_municipio';
            columns: ['municipio_id'];
            isOneToOne: false;
            referencedRelation: 'municipio';
            referencedColumns: ['id'];
          },
        ];
      };
      local_votacao_historico: {
        Row: {
          data_eleicao: string | null;
          endereco: string | null;
          id: number;
          local_votacao_id: number;
          nome: string | null;
        };
        Insert: {
          data_eleicao?: string | null;
          endereco?: string | null;
          id: number;
          local_votacao_id: number;
          nome?: string | null;
        };
        Update: {
          data_eleicao?: string | null;
          endereco?: string | null;
          id?: number;
          local_votacao_id?: number;
          nome?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_local_votacao_historico_local_votacao';
            columns: ['local_votacao_id'];
            isOneToOne: false;
            referencedRelation: 'local_votacao';
            referencedColumns: ['id'];
          },
        ];
      };
      macrorregiao_pt: {
        Row: {
          id: number;
          nome: string | null;
          uf_id: number | null;
        };
        Insert: {
          id: number;
          nome?: string | null;
          uf_id?: number | null;
        };
        Update: {
          id?: number;
          nome?: string | null;
          uf_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_macrorregiao_pt_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
        ];
      };
      mesorregiao: {
        Row: {
          id: number;
          nome: string | null;
          uf_id: number | null;
        };
        Insert: {
          id: number;
          nome?: string | null;
          uf_id?: number | null;
        };
        Update: {
          id?: number;
          nome?: string | null;
          uf_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_mesorregiao_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
        ];
      };
      microrregiao: {
        Row: {
          id: number;
          mesorregiao_id: number | null;
          nome: string | null;
          uf_id: number | null;
        };
        Insert: {
          id: number;
          mesorregiao_id?: number | null;
          nome?: string | null;
          uf_id?: number | null;
        };
        Update: {
          id?: number;
          mesorregiao_id?: number | null;
          nome?: string | null;
          uf_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_microrregiao_mesorregiao';
            columns: ['mesorregiao_id'];
            isOneToOne: false;
            referencedRelation: 'mesorregiao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_microrregiao_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
        ];
      };
      municipio: {
        Row: {
          id: number;
          macrorregiao_pt_id: number | null;
          mesorregiao_id: number | null;
          microrregiao_id: number | null;
          nome: string | null;
          uf_id: number | null;
        };
        Insert: {
          id: number;
          macrorregiao_pt_id?: number | null;
          mesorregiao_id?: number | null;
          microrregiao_id?: number | null;
          nome?: string | null;
          uf_id?: number | null;
        };
        Update: {
          id?: number;
          macrorregiao_pt_id?: number | null;
          mesorregiao_id?: number | null;
          microrregiao_id?: number | null;
          nome?: string | null;
          uf_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_municipio_macrorregiao_pt';
            columns: ['macrorregiao_pt_id'];
            isOneToOne: false;
            referencedRelation: 'macrorregiao_pt';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_municipio_mesorregiao';
            columns: ['mesorregiao_id'];
            isOneToOne: false;
            referencedRelation: 'mesorregiao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_municipio_microrregiao';
            columns: ['microrregiao_id'];
            isOneToOne: false;
            referencedRelation: 'microrregiao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_municipio_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
        ];
      };
      ocupacao: {
        Row: {
          codigo: string | null;
          descricao: string | null;
          id: number;
        };
        Insert: {
          codigo?: string | null;
          descricao?: string | null;
          id: number;
        };
        Update: {
          codigo?: string | null;
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      partido: {
        Row: {
          id: number;
          nome: string | null;
          sigla: string | null;
        };
        Insert: {
          id: number;
          nome?: string | null;
          sigla?: string | null;
        };
        Update: {
          id?: number;
          nome?: string | null;
          sigla?: string | null;
        };
        Relationships: [];
      };
      regiao: {
        Row: {
          id: number;
          nome: string | null;
        };
        Insert: {
          id: number;
          nome?: string | null;
        };
        Update: {
          id?: number;
          nome?: string | null;
        };
        Relationships: [];
      };
      situacao_candidatura: {
        Row: {
          codigo: string | null;
          descricao: string | null;
          id: number;
        };
        Insert: {
          codigo?: string | null;
          descricao?: string | null;
          id: number;
        };
        Update: {
          codigo?: string | null;
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      situacao_turno: {
        Row: {
          codigo: string | null;
          descricao: string | null;
          id: number;
        };
        Insert: {
          codigo?: string | null;
          descricao?: string | null;
          id: number;
        };
        Update: {
          codigo?: string | null;
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      uf: {
        Row: {
          id: number;
          nome: string | null;
          regiao_id: number | null;
          sigla: string | null;
        };
        Insert: {
          id: number;
          nome?: string | null;
          regiao_id?: number | null;
          sigla?: string | null;
        };
        Update: {
          id?: number;
          nome?: string | null;
          regiao_id?: number | null;
          sigla?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_uf_regiao';
            columns: ['regiao_id'];
            isOneToOne: false;
            referencedRelation: 'regiao';
            referencedColumns: ['id'];
          },
        ];
      };
      unidade_eleitoral: {
        Row: {
          id: number;
          municipio_id: number | null;
          sigla: string | null;
          tipo_abrangencia: string | null;
          uf_id: number | null;
        };
        Insert: {
          id: number;
          municipio_id?: number | null;
          sigla?: string | null;
          tipo_abrangencia?: string | null;
          uf_id?: number | null;
        };
        Update: {
          id?: number;
          municipio_id?: number | null;
          sigla?: string | null;
          tipo_abrangencia?: string | null;
          uf_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_unidade_eleitoral_municipio';
            columns: ['municipio_id'];
            isOneToOne: false;
            referencedRelation: 'municipio';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_unidade_eleitoral_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
        ];
      };
      votavel: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_votavel_candidato';
            columns: ['candidato_id', 'uf_id', 'eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'candidato';
            referencedColumns: ['id', 'uf_id', 'eleicao_id'];
          },
          {
            foreignKeyName: 'fk_votavel_cargo';
            columns: ['cargo_id'];
            isOneToOne: false;
            referencedRelation: 'cargo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_votavel_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_votavel_partido';
            columns: ['partido_id'];
            isOneToOne: false;
            referencedRelation: 'partido';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_votavel_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_votavel_unidade_eleitoral';
            columns: ['unidade_eleitoral_id'];
            isOneToOne: false;
            referencedRelation: 'unidade_eleitoral';
            referencedColumns: ['id'];
          },
        ];
      };
      votavel_35: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_143: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_220: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_221: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_297: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_298: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_426: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_427: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_546: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_547: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_619: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_35_620: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_143: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_220: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_221: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_297: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_298: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_426: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_427: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_546: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_547: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      votavel_42_619: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number;
          id: number;
          nome: string | null;
          numero_urna: string | null;
          partido_id: number | null;
          uf_id: number;
          unidade_eleitoral_id: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id: number;
          id: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id: number;
          unidade_eleitoral_id?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number;
          id?: number;
          nome?: string | null;
          numero_urna?: string | null;
          partido_id?: number | null;
          uf_id?: number;
          unidade_eleitoral_id?: number | null;
        };
        Relationships: [];
      };
      voto: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_voto_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_local_votacao';
            columns: ['local_votacao_id'];
            isOneToOne: false;
            referencedRelation: 'local_votacao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_votavel';
            columns: ['votavel_id', 'uf_id', 'eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'votavel';
            referencedColumns: ['id', 'uf_id', 'eleicao_id'];
          },
        ];
      };
      voto_35: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_143: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_220: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_221: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_297: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_298: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_426: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_427: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_546: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_547: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_619: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_35_620: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_143: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_220: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_221: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_297: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_298: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_426: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_427: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_546: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_547: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_42_619: {
        Row: {
          eleicao_id: number | null;
          local_votacao_id: number | null;
          uf_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          eleicao_id?: number | null;
          local_votacao_id?: number | null;
          uf_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_voto_por_cargo_cargo';
            columns: ['cargo_id'];
            isOneToOne: false;
            referencedRelation: 'cargo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_cargo_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_cargo_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_cargo_unidade_eleitoral';
            columns: ['unidade_eleitoral_id'];
            isOneToOne: false;
            referencedRelation: 'unidade_eleitoral';
            referencedColumns: ['id'];
          },
        ];
      };
      voto_por_cargo_35: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_143: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_220: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_221: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_297: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_298: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_426: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_427: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_546: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_547: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_619: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_35_620: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_143: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_220: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_221: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_297: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_298: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_426: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_427: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_546: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_547: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_cargo_42_619: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Insert: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Update: {
          cargo_id?: number | null;
          eleicao_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votos?: number | null;
          votos_validos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_voto_por_municipio_candidato';
            columns: ['candidato_id', 'uf_id', 'eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'candidato';
            referencedColumns: ['id', 'uf_id', 'eleicao_id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_cargo';
            columns: ['cargo_id'];
            isOneToOne: false;
            referencedRelation: 'cargo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_municipio';
            columns: ['municipio_id'];
            isOneToOne: false;
            referencedRelation: 'municipio';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_partido';
            columns: ['partido_id'];
            isOneToOne: false;
            referencedRelation: 'partido';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_unidade_eleitoral';
            columns: ['unidade_eleitoral_id'];
            isOneToOne: false;
            referencedRelation: 'unidade_eleitoral';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_votavel';
            columns: ['votavel_id', 'uf_id', 'eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'votavel';
            referencedColumns: ['id', 'uf_id', 'eleicao_id'];
          },
        ];
      };
      voto_por_municipio_35: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_143: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_220: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_221: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_297: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_298: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_426: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_427: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_546: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_547: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_619: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_35_620: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_143: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_220: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_221: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_297: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_298: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_426: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_427: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_546: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_547: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_municipio_42_619: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          municipio_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_voto_por_votavel_candidato';
            columns: ['candidato_id', 'uf_id', 'eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'candidato';
            referencedColumns: ['id', 'uf_id', 'eleicao_id'];
          },
          {
            foreignKeyName: 'fk_voto_por_votavel_cargo';
            columns: ['cargo_id'];
            isOneToOne: false;
            referencedRelation: 'cargo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_votavel_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_votavel_partido';
            columns: ['partido_id'];
            isOneToOne: false;
            referencedRelation: 'partido';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_votavel_uf';
            columns: ['uf_id'];
            isOneToOne: false;
            referencedRelation: 'uf';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_votavel_unidade_eleitoral';
            columns: ['unidade_eleitoral_id'];
            isOneToOne: false;
            referencedRelation: 'unidade_eleitoral';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_votavel_votavel';
            columns: ['votavel_id', 'uf_id', 'eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'votavel';
            referencedColumns: ['id', 'uf_id', 'eleicao_id'];
          },
        ];
      };
      voto_por_votavel_35: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_143: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_220: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_221: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_297: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_298: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_426: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_427: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_546: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_547: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_619: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_35_620: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_143: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_220: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_221: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_297: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_298: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_426: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_427: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_546: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_547: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
      voto_por_votavel_42_619: {
        Row: {
          candidato_id: number | null;
          cargo_id: number | null;
          eleicao_id: number | null;
          partido_id: number | null;
          uf_id: number | null;
          unidade_eleitoral_id: number | null;
          votavel_id: number | null;
          votos: number | null;
        };
        Insert: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Update: {
          candidato_id?: number | null;
          cargo_id?: number | null;
          eleicao_id?: number | null;
          partido_id?: number | null;
          uf_id?: number | null;
          unidade_eleitoral_id?: number | null;
          votavel_id?: number | null;
          votos?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      voto_por_cargo_municipio: {
        Row: {
          cargo_id: number | null;
          eleicao_id: number | null;
          municipio_id: number | null;
          votos: number | null;
          votos_validos: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'fk_voto_por_municipio_cargo';
            columns: ['cargo_id'];
            isOneToOne: false;
            referencedRelation: 'cargo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_eleicao';
            columns: ['eleicao_id'];
            isOneToOne: false;
            referencedRelation: 'eleicao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_voto_por_municipio_municipio';
            columns: ['municipio_id'];
            isOneToOne: false;
            referencedRelation: 'municipio';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Functions: {
      fetch_cabos_eleitorais: {
        Args: {
          p_candidato: Json;
          p_cargo: Json;
          p_cor_raca: Json;
          p_eleicao_id: number;
          p_faixa_etaria: Json;
          p_federacao: Json;
          p_genero: Json;
          p_limit?: number;
          p_macrorregiao_pt: Json;
          p_microrregiao: Json;
          p_municipio: Json;
          p_ocupacao: Json;
          p_offset?: number;
          p_partido: Json;
          p_sort_column?: string;
          p_sort_direction?: string;
          p_uf_id: number;
          p_unidade_eleitoral: Json;
        };
        Returns: {
          candidato_spritesheet_id: number;
          candidato_spritesheet_path: string;
          cargo_id: number;
          cor_raca_id: number;
          descricao_cargo: string;
          descricao_cor_raca: string;
          descricao_genero: string;
          descricao_ocupacao: string;
          descricao_situacao_turno: string;
          eleicao_id: number;
          genero_id: number;
          idade: number;
          long_name: string;
          macrorregiao_pt_id: number;
          microrregiao_id: number;
          nome_federacao: string;
          nome_macrorregiao_pt: string;
          nome_microrregiao: string;
          nome_partido: string;
          nome_unidade_eleitoral: string;
          ocupacao_id: number;
          partido_id: number;
          porcentagem_votos: number;
          sequencial_candidato: string;
          short_name: string;
          sigla_partido: string;
          tipo_abrangencia: string;
          unidade_eleitoral_id: number;
          votavel_id: number;
          votos: number;
          x_candidato_sprite: number;
          y_candidato_sprite: number;
        }[];
      };
      fetch_cabos_eleitorais_aggregation: {
        Args: {
          p_candidato: Json;
          p_cargo: Json;
          p_cor_raca: Json;
          p_eleicao_id: number;
          p_faixa_etaria: Json;
          p_federacao: Json;
          p_genero: Json;
          p_macrorregiao_pt: Json;
          p_microrregiao: Json;
          p_municipio: Json;
          p_ocupacao: Json;
          p_partido: Json;
          p_uf_id: number;
          p_unidade_eleitoral: Json;
        };
        Returns: Database['etl']['CompositeTypes']['cabos_eleitorais_aggregation'];
        SetofOptions: {
          from: '*';
          to: 'cabos_eleitorais_aggregation';
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      fetch_cabos_eleitorais_aggregation_optimized: {
        Args: {
          p_candidato: Json;
          p_cargo: Json;
          p_cor_raca: Json;
          p_eleicao_id: number;
          p_faixa_etaria: Json;
          p_federacao: Json;
          p_genero: Json;
          p_macrorregiao_pt: Json;
          p_microrregiao: Json;
          p_municipio: Json;
          p_ocupacao: Json;
          p_partido: Json;
          p_uf_id: number;
          p_unidade_eleitoral: Json;
        };
        Returns: Database['etl']['CompositeTypes']['cabos_eleitorais_aggregation'];
        SetofOptions: {
          from: '*';
          to: 'cabos_eleitorais_aggregation';
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      fetch_cabos_eleitorais_optimized: {
        Args: {
          p_candidato: Json;
          p_cargo: Json;
          p_cor_raca: Json;
          p_eleicao_id: number;
          p_faixa_etaria: Json;
          p_federacao: Json;
          p_genero: Json;
          p_limit?: number;
          p_macrorregiao_pt: Json;
          p_microrregiao: Json;
          p_municipio: Json;
          p_ocupacao: Json;
          p_offset?: number;
          p_partido: Json;
          p_sort_column?: string;
          p_sort_direction?: string;
          p_uf_id: number;
          p_unidade_eleitoral: Json;
        };
        Returns: {
          candidato_spritesheet_id: number;
          candidato_spritesheet_path: string;
          cargo_id: number;
          cor_raca_id: number;
          descricao_cargo: string;
          descricao_cor_raca: string;
          descricao_genero: string;
          descricao_ocupacao: string;
          descricao_situacao_turno: string;
          eleicao_id: number;
          genero_id: number;
          idade: number;
          long_name: string;
          macrorregiao_pt_id: number;
          microrregiao_id: number;
          nome_federacao: string;
          nome_macrorregiao_pt: string;
          nome_microrregiao: string;
          nome_partido: string;
          nome_unidade_eleitoral: string;
          ocupacao_id: number;
          partido_id: number;
          porcentagem_votos: number;
          sequencial_candidato: string;
          short_name: string;
          sigla_partido: string;
          tipo_abrangencia: string;
          unidade_eleitoral_id: number;
          votavel_id: number;
          votos: number;
          x_candidato_sprite: number;
          y_candidato_sprite: number;
        }[];
      };
      fetch_comparativo: {
        Args: { entities: Json; p_uf: Json; p_uf_id: number };
        Returns: {
          candidato_votos: Json;
          municipio_id: number;
          nome_municipio: string;
          partido_votos: Json;
        }[];
      };
      fetch_comparativo_entities: {
        Args: { entities: Json };
        Returns: {
          ano_eleicao: string;
          descricao_cargo: string;
          descricao_eleicao: string;
          entity_id: string;
          external_id: string;
          id: number;
          long_name: string;
          numero_turno: string;
          short_name: string;
          tipo_abrangencia: string;
          type: string;
        }[];
      };
      fetch_comparativo_municipio: {
        Args: { entities: Json; municipio_id_param: number; p_uf_id: number };
        Returns: {
          candidato_votos: Json;
          endereco_local_votacao: string;
          local_votacao_id: number;
          nome_local_votacao: string;
          numero_local_votacao: string;
          numero_zona: string;
          partido_votos: Json;
        }[];
      };
      fetch_votavel_municipio_votos: {
        Args: {
          p_eleicao_id: number;
          p_macrorregiao_pt: Json;
          p_microrregiao: Json;
          p_municipio: Json;
          p_uf_id: number;
          p_votavel_id: number;
        };
        Returns: {
          municipio_id: number;
          nome_municipio: string;
          porcentagem_votos: number;
          sigla_uf: string;
          votavel_id: number;
          votos: number;
        }[];
      };
      fetch_votes_per_municipio: {
        Args: {
          p_candidato: Json;
          p_cargo: Json;
          p_cor_raca: Json;
          p_eleicao_id: number;
          p_faixa_etaria: Json;
          p_federacao: Json;
          p_genero: Json;
          p_macrorregiao_pt: Json;
          p_microrregiao: Json;
          p_municipio: Json;
          p_ocupacao: Json;
          p_partido: Json;
          p_uf_id: number;
          p_unidade_eleitoral: Json;
        };
        Returns: {
          microrregiao_id: number;
          municipio_id: number;
          nome_municipio: string;
          sigla_uf: string;
          votos: number;
        }[];
      };
      get_cabos_eleitorais_filters: {
        Args: {
          p_candidato: Json;
          p_cargo: Json;
          p_cor_raca: Json;
          p_faixa_etaria: Json;
          p_federacao: Json;
          p_genero: Json;
          p_macrorregiao_pt: Json;
          p_microrregiao: Json;
          p_municipio: Json;
          p_ocupacao: Json;
          p_partido: Json;
          p_unidade_eleitoral: Json;
        };
        Returns: Database['etl']['CompositeTypes']['cabos_eleitorais_filters'];
        SetofOptions: {
          from: '*';
          to: 'cabos_eleitorais_filters';
          isOneToOne: true;
          isSetofReturn: false;
        };
      };
      get_cargo_ids_filter: { Args: { p_eleicao: Json }; Returns: number[] };
      get_municipio_ids_filter: {
        Args: { p_microrregiao: Json };
        Returns: number[];
      };
      get_partido_ids_filter: { Args: { p_eleicao: Json }; Returns: number[] };
      get_query_condition: {
        Args: { p_column_name: string; p_select_object: Json };
        Returns: string;
      };
      get_query_ranges_condition: {
        Args: { p_column_name: string; p_ranges_object: Json };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      cabos_eleitorais_aggregation: {
        candidato_count: number | null;
        votos_total: number | null;
        votos_branco: number | null;
        votos_nulo: number | null;
        votos_valido: number | null;
        votos_legenda: number | null;
      };
      cabos_eleitorais_filters: {
        base_filters: string | null;
        municipio_filters: string | null;
      };
    };
  };
  public: {
    Tables: {
      apoiador: {
        Row: {
          autor_id: string;
          criado_em: string;
          dobrada: string | null;
          id: number;
          instagram: string | null;
          meta_votos: number | null;
          municipio_id: number | null;
          nome: string | null;
          observacao: string | null;
          organizacao_id: number;
          uf_id: number | null;
          whatsapp: string | null;
        };
        Insert: {
          autor_id?: string;
          criado_em?: string;
          dobrada?: string | null;
          id?: number;
          instagram?: string | null;
          meta_votos?: number | null;
          municipio_id?: number | null;
          nome?: string | null;
          observacao?: string | null;
          organizacao_id: number;
          uf_id?: number | null;
          whatsapp?: string | null;
        };
        Update: {
          autor_id?: string;
          criado_em?: string;
          dobrada?: string | null;
          id?: number;
          instagram?: string | null;
          meta_votos?: number | null;
          municipio_id?: number | null;
          nome?: string | null;
          observacao?: string | null;
          organizacao_id?: number;
          uf_id?: number | null;
          whatsapp?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'apoiador_organizacao_id_fkey';
            columns: ['organizacao_id'];
            isOneToOne: false;
            referencedRelation: 'organizacao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'apoiador_usuario_id_fkey';
            columns: ['autor_id'];
            isOneToOne: false;
            referencedRelation: 'usuario';
            referencedColumns: ['id'];
          },
        ];
      };
      emenda_estadual: {
        Row: {
          acao: string | null;
          ano: string | null;
          autor_id: string;
          emenda_estadual_acao_id: number;
          emenda_estadual_tipo_id: number;
          id: number;
          municipio_id: number | null;
          numero_emenda: string | null;
          organizacao_id: number | null;
          situacao: string;
          tipo: string | null;
          uf_id: number | null;
          valor_empenhado: number | null;
          valor_pago: number | null;
        };
        Insert: {
          acao?: string | null;
          ano?: string | null;
          autor_id: string;
          emenda_estadual_acao_id: number;
          emenda_estadual_tipo_id: number;
          id: number;
          municipio_id?: number | null;
          numero_emenda?: string | null;
          organizacao_id?: number | null;
          situacao: string;
          tipo?: string | null;
          uf_id?: number | null;
          valor_empenhado?: number | null;
          valor_pago?: number | null;
        };
        Update: {
          acao?: string | null;
          ano?: string | null;
          autor_id?: string;
          emenda_estadual_acao_id?: number;
          emenda_estadual_tipo_id?: number;
          id?: number;
          municipio_id?: number | null;
          numero_emenda?: string | null;
          organizacao_id?: number | null;
          situacao?: string;
          tipo?: string | null;
          uf_id?: number | null;
          valor_empenhado?: number | null;
          valor_pago?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'emenda_estadual_organizacao_id_fkey';
            columns: ['organizacao_id'];
            isOneToOne: false;
            referencedRelation: 'organizacao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_emenda_estadual_acao_id';
            columns: ['emenda_estadual_acao_id'];
            isOneToOne: false;
            referencedRelation: 'emenda_estadual_acao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_emenda_estadual_emenda_estadual_acao';
            columns: ['emenda_estadual_acao_id'];
            isOneToOne: false;
            referencedRelation: 'emenda_estadual_acao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_emenda_estadual_emenda_estadual_tipo';
            columns: ['emenda_estadual_tipo_id'];
            isOneToOne: false;
            referencedRelation: 'emenda_estadual_tipo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_emenda_estadual_tipo_id';
            columns: ['emenda_estadual_tipo_id'];
            isOneToOne: false;
            referencedRelation: 'emenda_estadual_tipo';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_usuario_id';
            columns: ['autor_id'];
            isOneToOne: false;
            referencedRelation: 'usuario';
            referencedColumns: ['id'];
          },
        ];
      };
      emenda_estadual_acao: {
        Row: {
          codigo: string | null;
          descricao: string | null;
          id: number;
        };
        Insert: {
          codigo?: string | null;
          descricao?: string | null;
          id: number;
        };
        Update: {
          codigo?: string | null;
          descricao?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      emenda_estadual_tipo: {
        Row: {
          id: number;
          nome: string | null;
        };
        Insert: {
          id: number;
          nome?: string | null;
        };
        Update: {
          id?: number;
          nome?: string | null;
        };
        Relationships: [];
      };
      organizacao: {
        Row: {
          criado_em: string;
          foto: string | null;
          id: number;
          nome_organizacao: string | null;
          slug: string;
        };
        Insert: {
          criado_em?: string;
          foto?: string | null;
          id?: number;
          nome_organizacao?: string | null;
          slug: string;
        };
        Update: {
          criado_em?: string;
          foto?: string | null;
          id?: number;
          nome_organizacao?: string | null;
          slug?: string;
        };
        Relationships: [];
      };
      organizacao_usuario: {
        Row: {
          organizacao_id: number;
          usuario_id: string;
        };
        Insert: {
          organizacao_id: number;
          usuario_id: string;
        };
        Update: {
          organizacao_id?: number;
          usuario_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'organizacao_usuario_organizacao_id_fkey';
            columns: ['organizacao_id'];
            isOneToOne: false;
            referencedRelation: 'organizacao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'organizacao_usuario_usuario_id_fkey';
            columns: ['usuario_id'];
            isOneToOne: false;
            referencedRelation: 'usuario';
            referencedColumns: ['id'];
          },
        ];
      };
      usuario: {
        Row: {
          criado_em: string;
          email: string;
          foto: string | null;
          id: string;
          nome: string | null;
        };
        Insert: {
          criado_em?: string;
          email: string;
          foto?: string | null;
          id: string;
          nome?: string | null;
        };
        Update: {
          criado_em?: string;
          email?: string;
          foto?: string | null;
          id?: string;
          nome?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      custom_access_token_hook: { Args: { event: Json }; Returns: Json };
      fetch_database_options: {
        Args: {
          filters?: Json[];
          p_limit?: number;
          p_offset?: number;
          p_order?: Json[];
          p_schema?: string;
          search: string;
          search_columns: string[];
          table_name: string;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  'public'
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  etl: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
