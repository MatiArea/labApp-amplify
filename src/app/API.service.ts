/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreatePatientInput = {
  id?: string | null;
  name: string;
  dni: number;
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null;
  dni?: ModelIntInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Patient = {
  __typename: "Patient";
  id?: string;
  name?: string;
  dni?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePatientInput = {
  id: string;
  name?: string | null;
  dni?: number | null;
};

export type DeletePatientInput = {
  id?: string | null;
};

export type CreateDoctorInput = {
  id?: string | null;
  name: string;
  specialty: string;
};

export type ModelDoctorConditionInput = {
  name?: ModelStringInput | null;
  specialty?: ModelStringInput | null;
  and?: Array<ModelDoctorConditionInput | null> | null;
  or?: Array<ModelDoctorConditionInput | null> | null;
  not?: ModelDoctorConditionInput | null;
};

export type Doctor = {
  __typename: "Doctor";
  id?: string;
  name?: string;
  specialty?: string;
  turns?: ModelTurnConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelTurnConnection = {
  __typename: "ModelTurnConnection";
  items?: Array<Turn | null> | null;
  nextToken?: string | null;
};

export type Turn = {
  __typename: "Turn";
  id?: string;
  patiendId?: string;
  doctorId?: string;
  patient?: Patient;
  doctor?: Doctor;
  date?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateDoctorInput = {
  id: string;
  name?: string | null;
  specialty?: string | null;
};

export type DeleteDoctorInput = {
  id?: string | null;
};

export type CreateTurnInput = {
  id?: string | null;
  patiendId: string;
  doctorId: string;
  date: string;
  type: string;
};

export type ModelTurnConditionInput = {
  patiendId?: ModelIDInput | null;
  doctorId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelTurnConditionInput | null> | null;
  or?: Array<ModelTurnConditionInput | null> | null;
  not?: ModelTurnConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateTurnInput = {
  id: string;
  patiendId?: string | null;
  doctorId?: string | null;
  date?: string | null;
  type?: string | null;
};

export type DeleteTurnInput = {
  id?: string | null;
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  dni?: ModelIntInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection";
  items?: Array<Patient | null> | null;
  nextToken?: string | null;
};

export type ModelDoctorFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  specialty?: ModelStringInput | null;
  and?: Array<ModelDoctorFilterInput | null> | null;
  or?: Array<ModelDoctorFilterInput | null> | null;
  not?: ModelDoctorFilterInput | null;
};

export type ModelDoctorConnection = {
  __typename: "ModelDoctorConnection";
  items?: Array<Doctor | null> | null;
  nextToken?: string | null;
};

export type ModelTurnFilterInput = {
  id?: ModelIDInput | null;
  patiendId?: ModelIDInput | null;
  doctorId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelTurnFilterInput | null> | null;
  or?: Array<ModelTurnFilterInput | null> | null;
  not?: ModelTurnFilterInput | null;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string;
  dni: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string;
  dni: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string;
  dni: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  name: string;
  specialty: string;
  turns?: {
    __typename: "ModelTurnConnection";
    items?: Array<{
      __typename: "Turn";
      id: string;
      patiendId: string;
      doctorId: string;
      date: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  name: string;
  specialty: string;
  turns?: {
    __typename: "ModelTurnConnection";
    items?: Array<{
      __typename: "Turn";
      id: string;
      patiendId: string;
      doctorId: string;
      date: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorMutation = {
  __typename: "Doctor";
  id: string;
  name: string;
  specialty: string;
  turns?: {
    __typename: "ModelTurnConnection";
    items?: Array<{
      __typename: "Turn";
      id: string;
      patiendId: string;
      doctorId: string;
      date: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTurnMutation = {
  __typename: "Turn";
  id: string;
  patiendId: string;
  doctorId: string;
  patient?: {
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  doctor?: {
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTurnMutation = {
  __typename: "Turn";
  id: string;
  patiendId: string;
  doctorId: string;
  patient?: {
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  doctor?: {
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTurnMutation = {
  __typename: "Turn";
  id: string;
  patiendId: string;
  doctorId: string;
  patient?: {
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  doctor?: {
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  name: string;
  dni: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items?: Array<{
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetDoctorQuery = {
  __typename: "Doctor";
  id: string;
  name: string;
  specialty: string;
  turns?: {
    __typename: "ModelTurnConnection";
    items?: Array<{
      __typename: "Turn";
      id: string;
      patiendId: string;
      doctorId: string;
      date: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorsQuery = {
  __typename: "ModelDoctorConnection";
  items?: Array<{
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTurnQuery = {
  __typename: "Turn";
  id: string;
  patiendId: string;
  doctorId: string;
  patient?: {
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  doctor?: {
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTurnsQuery = {
  __typename: "ModelTurnConnection";
  items?: Array<{
    __typename: "Turn";
    id: string;
    patiendId: string;
    doctorId: string;
    patient?: {
      __typename: "Patient";
      id: string;
      name: string;
      dni: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    doctor?: {
      __typename: "Doctor";
      id: string;
      name: string;
      specialty: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    date: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string;
  dni: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string;
  dni: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string;
  dni: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  name: string;
  specialty: string;
  turns?: {
    __typename: "ModelTurnConnection";
    items?: Array<{
      __typename: "Turn";
      id: string;
      patiendId: string;
      doctorId: string;
      date: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  name: string;
  specialty: string;
  turns?: {
    __typename: "ModelTurnConnection";
    items?: Array<{
      __typename: "Turn";
      id: string;
      patiendId: string;
      doctorId: string;
      date: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  name: string;
  specialty: string;
  turns?: {
    __typename: "ModelTurnConnection";
    items?: Array<{
      __typename: "Turn";
      id: string;
      patiendId: string;
      doctorId: string;
      date: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTurnSubscription = {
  __typename: "Turn";
  id: string;
  patiendId: string;
  doctorId: string;
  patient?: {
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  doctor?: {
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTurnSubscription = {
  __typename: "Turn";
  id: string;
  patiendId: string;
  doctorId: string;
  patient?: {
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  doctor?: {
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTurnSubscription = {
  __typename: "Turn";
  id: string;
  patiendId: string;
  doctorId: string;
  patient?: {
    __typename: "Patient";
    id: string;
    name: string;
    dni: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  doctor?: {
    __typename: "Doctor";
    id: string;
    name: string;
    specialty: string;
    turns?: {
      __typename: "ModelTurnConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  date: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePatient(
    input: CreatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!, $condition: ModelPatientConditionInput) {
        createPatient(input: $input, condition: $condition) {
          __typename
          id
          name
          dni
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!, $condition: ModelPatientConditionInput) {
        updatePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          dni
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!, $condition: ModelPatientConditionInput) {
        deletePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          dni
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async CreateDoctor(
    input: CreateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<CreateDoctorMutation> {
    const statement = `mutation CreateDoctor($input: CreateDoctorInput!, $condition: ModelDoctorConditionInput) {
        createDoctor(input: $input, condition: $condition) {
          __typename
          id
          name
          specialty
          turns {
            __typename
            items {
              __typename
              id
              patiendId
              doctorId
              date
              type
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorMutation>response.data.createDoctor;
  }
  async UpdateDoctor(
    input: UpdateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<UpdateDoctorMutation> {
    const statement = `mutation UpdateDoctor($input: UpdateDoctorInput!, $condition: ModelDoctorConditionInput) {
        updateDoctor(input: $input, condition: $condition) {
          __typename
          id
          name
          specialty
          turns {
            __typename
            items {
              __typename
              id
              patiendId
              doctorId
              date
              type
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorMutation>response.data.updateDoctor;
  }
  async DeleteDoctor(
    input: DeleteDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<DeleteDoctorMutation> {
    const statement = `mutation DeleteDoctor($input: DeleteDoctorInput!, $condition: ModelDoctorConditionInput) {
        deleteDoctor(input: $input, condition: $condition) {
          __typename
          id
          name
          specialty
          turns {
            __typename
            items {
              __typename
              id
              patiendId
              doctorId
              date
              type
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorMutation>response.data.deleteDoctor;
  }
  async CreateTurn(
    input: CreateTurnInput,
    condition?: ModelTurnConditionInput
  ): Promise<CreateTurnMutation> {
    const statement = `mutation CreateTurn($input: CreateTurnInput!, $condition: ModelTurnConditionInput) {
        createTurn(input: $input, condition: $condition) {
          __typename
          id
          patiendId
          doctorId
          patient {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          doctor {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          date
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTurnMutation>response.data.createTurn;
  }
  async UpdateTurn(
    input: UpdateTurnInput,
    condition?: ModelTurnConditionInput
  ): Promise<UpdateTurnMutation> {
    const statement = `mutation UpdateTurn($input: UpdateTurnInput!, $condition: ModelTurnConditionInput) {
        updateTurn(input: $input, condition: $condition) {
          __typename
          id
          patiendId
          doctorId
          patient {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          doctor {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          date
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTurnMutation>response.data.updateTurn;
  }
  async DeleteTurn(
    input: DeleteTurnInput,
    condition?: ModelTurnConditionInput
  ): Promise<DeleteTurnMutation> {
    const statement = `mutation DeleteTurn($input: DeleteTurnInput!, $condition: ModelTurnConditionInput) {
        deleteTurn(input: $input, condition: $condition) {
          __typename
          id
          patiendId
          doctorId
          patient {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          doctor {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          date
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTurnMutation>response.data.deleteTurn;
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          name
          dni
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  async GetDoctor(id: string): Promise<GetDoctorQuery> {
    const statement = `query GetDoctor($id: ID!) {
        getDoctor(id: $id) {
          __typename
          id
          name
          specialty
          turns {
            __typename
            items {
              __typename
              id
              patiendId
              doctorId
              date
              type
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorQuery>response.data.getDoctor;
  }
  async ListDoctors(
    filter?: ModelDoctorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDoctorsQuery> {
    const statement = `query ListDoctors($filter: ModelDoctorFilterInput, $limit: Int, $nextToken: String) {
        listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorsQuery>response.data.listDoctors;
  }
  async GetTurn(id: string): Promise<GetTurnQuery> {
    const statement = `query GetTurn($id: ID!) {
        getTurn(id: $id) {
          __typename
          id
          patiendId
          doctorId
          patient {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          doctor {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          date
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTurnQuery>response.data.getTurn;
  }
  async ListTurns(
    filter?: ModelTurnFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTurnsQuery> {
    const statement = `query ListTurns($filter: ModelTurnFilterInput, $limit: Int, $nextToken: String) {
        listTurns(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            patiendId
            doctorId
            patient {
              __typename
              id
              name
              dni
              createdAt
              updatedAt
            }
            doctor {
              __typename
              id
              name
              specialty
              createdAt
              updatedAt
            }
            date
            type
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTurnsQuery>response.data.listTurns;
  }
  OnCreatePatientListener: Observable<
    SubscriptionResponse<OnCreatePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient {
        onCreatePatient {
          __typename
          id
          name
          dni
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePatientSubscription>>;

  OnUpdatePatientListener: Observable<
    SubscriptionResponse<OnUpdatePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient {
        onUpdatePatient {
          __typename
          id
          name
          dni
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePatientSubscription>>;

  OnDeletePatientListener: Observable<
    SubscriptionResponse<OnDeletePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient {
        onDeletePatient {
          __typename
          id
          name
          dni
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePatientSubscription>>;

  OnCreateDoctorListener: Observable<
    SubscriptionResponse<OnCreateDoctorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctor {
        onCreateDoctor {
          __typename
          id
          name
          specialty
          turns {
            __typename
            items {
              __typename
              id
              patiendId
              doctorId
              date
              type
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateDoctorSubscription>>;

  OnUpdateDoctorListener: Observable<
    SubscriptionResponse<OnUpdateDoctorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctor {
        onUpdateDoctor {
          __typename
          id
          name
          specialty
          turns {
            __typename
            items {
              __typename
              id
              patiendId
              doctorId
              date
              type
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateDoctorSubscription>>;

  OnDeleteDoctorListener: Observable<
    SubscriptionResponse<OnDeleteDoctorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctor {
        onDeleteDoctor {
          __typename
          id
          name
          specialty
          turns {
            __typename
            items {
              __typename
              id
              patiendId
              doctorId
              date
              type
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteDoctorSubscription>>;

  OnCreateTurnListener: Observable<
    SubscriptionResponse<OnCreateTurnSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTurn {
        onCreateTurn {
          __typename
          id
          patiendId
          doctorId
          patient {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          doctor {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          date
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTurnSubscription>>;

  OnUpdateTurnListener: Observable<
    SubscriptionResponse<OnUpdateTurnSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTurn {
        onUpdateTurn {
          __typename
          id
          patiendId
          doctorId
          patient {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          doctor {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          date
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTurnSubscription>>;

  OnDeleteTurnListener: Observable<
    SubscriptionResponse<OnDeleteTurnSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTurn {
        onDeleteTurn {
          __typename
          id
          patiendId
          doctorId
          patient {
            __typename
            id
            name
            dni
            createdAt
            updatedAt
          }
          doctor {
            __typename
            id
            name
            specialty
            turns {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          date
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTurnSubscription>>;
}
