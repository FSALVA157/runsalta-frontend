export interface IEquipoTList {
    data:  IEquipoT[];
    total: number;
}

export interface IEquipoT {
    id_equipo?: number;
    nombre?:           string;
    cel_guardia?:      string;
    codigo?:           string;
    codigo_postal?:    string;
    direccion?:        null;
    email?:            string;
    fax?:              null;
    observacion?:      null;
    responsable?:      string;
    telefono?:         string;
    provincia_id?:     number;
    provincia?:        string;
    usuario_alta_id?:  number;
    usuario_modif_id?: number;
}

