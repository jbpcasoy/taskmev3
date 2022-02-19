import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  Select,
  Grid,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";

export const TaskListToolbar = ({ handleAddTask, ...props }) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Tasks
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained" onClick={handleAddTask}>
          Add task
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="sortby-select-label">Sort by</InputLabel>
                <Select labelId="sortby-select-label" label="Sort by" fullWidth />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
