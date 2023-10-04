
export class LegajoModel{

    constructor(
        public apellido?: string,
        public nombre?: string,
        public fecha_nacimiento?: Date,
        public usuario_alta_id?: number,
        public usuario_modif_id?: number,
        public activo ?: boolean,  
        public calle_legajo ?: string,
        public tpo_pub_prv_cob_sal ?: number,
        public codigo ?: string,  
        public constancia_parto ?: number,
        public detalle_probl_salud ?: string,
        public direccion ?: string,
        public email ?: string,
        public escolarizado ?: string,  
        public establecimento_escolarizado ?: string,
        public estado_documento ?: number,
        public estado_causa_judicial ?: number,
        public estado_obra_social ?: number,
        public estado_probl_salud ?: number,
        public file_dni ?: string,
        public file_partida_nac ?: string,
        public file_problematica_salud ?: string,
        public nivel_educacion ?: string,
        public nro_documento ?: string,
        public numero_calle ?: string,
        public observ_obra_social ?: string,
        public observaciones ?: string,
        public partida_nacimiento ?: number,
        public probl_salud ?: string,
        public referencia_llamada102 ?: string,
        public se_interv_en_su_gestion ?: number,
        public sexo_id ?: number,
        public telefono ?: string,
        public telefono_legajo ?: string,
        public tpo_cobertura_salud ?: number,
        public tipo_documento ?: string,
        public localidad_id ?: number,
        public municipio_id ?: number,
        public nacionalidad_id ?: number,
        public obra_social_id ?: number,
        public pais_id ?: number,
        public provincia_id ?: number,
        public acompaniante_id ?: number,
        public equipot_id ?: number,
        public serviciol_id ?: number
         ){}
}