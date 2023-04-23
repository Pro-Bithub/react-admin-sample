import * as React from "react";
import { SimpleForm, TextInput, DateTimeInput ,SelectInput } from "react-admin";

const ProfileForm = (props) => {
  return (
    <SimpleForm {...props}>
      <TextInput source="firstName" label="Prénom" />
      <TextInput source="lastName" label="Nom de famille" />
      <TextInput source="phone" label="Téléphone" />
      <SelectInput
                    source="language"
                    label="Langue"
                    choices={[
                        { id: 'en', name: 'Anglais' },
                        { id: 'fr', name: 'Français' },
                        { id: 'es', name: 'Espagnol' },
                    ]}
                />
      <TextInput source="timezone" label="Fuseau horaire" />
      <DateTimeInput
        source="dateFormat"
        label="Format de la date"
      
      />
      <DateTimeInput
        source="timeFormat"
        label="Format de l'heure"
     
      />
    </SimpleForm>
  );
};

export default ProfileForm;
