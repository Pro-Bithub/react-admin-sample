// in src/users.tsx
import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, InputProps, ListBase, Title, Pagination, useGetResourceLabel, useListContext, useResourceContext, FilterContext, TopToolbar, SearchInput, ReferenceInput, SelectInput, NumberInput, useTranslate, FilterButton, SortButton, CreateButton, ExportButton, FilterForm } from "react-admin";
import MyUrlField from './MyUrlField';
import { Box, Chip} from "@material-ui/core";
import ImageList from './GridList';
import Aside from "./Aside";
export const CourList = () => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const getResourceLabel = useGetResourceLabel();
  const { data } = useListContext();
  const resource = useResourceContext();
  console.log("resource")
  console.log(resource)
  console.log("data")
  console.log(data)
  return (
    <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
    <Title defaultTitle={getResourceLabel('products', 2)} />
    <FilterContext.Provider value={productFilters}>
        <ListActions isSmall={isSmall} />
        {isSmall && (
            <Box m={1}>
                <FilterForm />
            </Box>
        )}
    </FilterContext.Provider>
    <Box display="flex">
        <Aside />
        <Box width={isSmall ? 'auto' : 'calc(100% - 16em)'}>
            <ImageList />
            <Pagination rowsPerPageOptions={[12, 24, 48, 72]} />
        </Box>
    </Box>
</ListBase>
  );
};
/* const QuickFilter = ({ label }: InputProps) => {
  const translate = useTranslate();
  return <Chip sx={{ mb: 1 }} label={translate(label as string)} />;
};
 */
export const productFilters = [
  <SearchInput source="q" alwaysOn />,
  <ReferenceInput
      source="category_id"
      reference="categories"
      sort={{ field: 'id', order: 'ASC' }}
  >
      <SelectInput source="name" />
  </ReferenceInput>,
  <NumberInput source="width_gte" />,
  <NumberInput source="width_lte" />,
  <NumberInput source="height_gte" />,
  <NumberInput source="height_lte" />,
/*   <QuickFilter
      label="resources.products.fields.stock_lte"
      source="stock_lte"
      defaultValue={10}
  />, */
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
      {isSmall && <FilterButton />}
      <SortButton fields={['reference', 'sales', 'stock']} />
      {/* <CreateButton />
      <ExportButton /> */}
  </TopToolbar>
);