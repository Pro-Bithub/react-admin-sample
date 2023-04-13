// in src/posts.tsx
import {
    List,
    DatagridConfigurable,
    TextField,
    ReferenceField,
    EditButton,
    Edit, 
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext,
    TopToolbar,
    SelectColumnsButton,
    CreateButton,
    ExportButton,
    FilterButton
  } from "react-admin";
  const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

const PostListActions = () => (
  <TopToolbar>
      <SelectColumnsButton />
      <FilterButton />
      <CreateButton />
      <ExportButton />
  </TopToolbar>
);

export const PostList = () => (
  <List filters={postFilters} actions={<PostListActions />}>
    <DatagridConfigurable rowClick="edit">
    <TextField source="id" />
    <ReferenceField source="userId" reference="users" />
    <TextField source="title" />
    <EditButton />
    </DatagridConfigurable>
  </List>
);
const PostTitle = () => {
 const record = useRecordContext();
 return <span>Post {record ? `"${record.title}"` : ''}</span>;
 };


export const PostEdit = () => (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="id" disabled />
        <TextInput source="title" />
        <TextInput source="body"  multiline rows={5} />
      </SimpleForm>
    </Edit>
  );

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
