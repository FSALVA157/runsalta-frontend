export interface ILegajos {
    data:  ILegajo[];
    total: number;
}

export interface ILegajo {
    id_legajo:                   number;
    activo:                      boolean;
    apellido:                    string;
    nombre:                      string;
    fecha_nacimiento:            Date | null;
    calle_legajo:                null | string;
    tpo_pub_prv_cob_sal:         number | null;
    codigo:                      null | string;
    constancia_parto:            null | null;
    detalle_probl_salud:         null | string;
    direccion:                   string | null;
    email:                       null | string;
    escolarizado:                null | string;
    establecimento_escolarizado: null | string;
    estado_documento:            number | null;
    estado_causa_judicial:       number | null;
    estado_obra_social:          number | null;
    estado_probl_salud:          number | null;
    file_dni:                    null | string;
    file_partida_nac:            null | string;
    file_problematica_salud:     null | string;
    nivel_educacion:             null | string;
    nro_documento:               string | null;
    numero_calle:                null | string;
    observ_obra_social:          null | string;
    observaciones:               null | string;
    partida_nacimiento:          number | null;
    probl_salud:                 null | string;
    referencia_llamada102:       string | null;
    se_interv_en_su_gestion:     number | null;
    sexo_id:                     number;
    telefono:                    null | string;
    telefono_legajo:             null | string;
    tpo_cobertura_salud:         number | null;
    tipo_documento:              null | string;
    usuario_alta_id:             number;
    usuario_modif_id:            number;
    local_id:                    number | null;
    localidad_id:                number | null;
    municipio_id:                number | null;
    nacionalidad_id:             number | null;
    obra_social_id:              number | null;
    pais_id:                     number;
    provincia_id:                number | null;
    acompaniante_id:             number | null;
    zonal_id:                    number | null;
    fecha_alta:                  Date | null;
    ultima_actualizacion:        Date | null;
    fecha_baja:                  null | null;
    sexo:                        string;
}
