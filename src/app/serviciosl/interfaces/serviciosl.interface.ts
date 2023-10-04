export interface IServiciosList {
    data:  IServicio[];
    total: number;
}

export interface IServicio {
    id_serviciol?:       number;
    nombre?:             string;
    cel_guardia?:        string;
    codigo?:             string;
    convenio?:           boolean;
    direccion?:          null;
    email?:              string;
    observacion?:        null;
    telefono?:           string;
    equipot_id?:         number;
    equipo_territorial?: string;
}
