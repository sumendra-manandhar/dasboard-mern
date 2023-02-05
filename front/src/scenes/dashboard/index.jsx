import {
	HomeRepairServiceOutlined,
	HomeIcon,
	ExpandMoreIcon,
	Expand,
} from "@mui/icons-material";
import {
	Box,
	Breadcrumbs,
	Chip,
	emphasize,
	Link,
	Typography,
	withStyles,
} from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// const StyledBreadcrumb = withStyles((theme) => ({
// 	root: {
// 		backgroundColor: theme.palette.grey[100],
// 		height: theme.spacing(3),
// 		color: theme.palette.grey[800],
// 		fontWeight: theme.typography.fontWeightRegular,
// 		"&:hover, &:focus": {
// 			backgroundColor: theme.palette.grey[300],
// 		},
// 		"&:active": {
// 			boxShadow: theme.shadows[1],
// 			backgroundColor: emphasize(theme.palette.grey[300], 0.12),
// 		},
// 	},
// }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const Dashboard = () => {
	return (
		<Box width='100%'>
			<Box m='1.5rem 2rem 2rem 3rem'>
				{/* <Breadcrumbs aria-label='breadcrumb'>
					<StyledBreadcrumb
						component='a'
						href='#'
						label='Home'
						icon={<HomeRepairServiceOutlined fontSize='small' />}
					/>
					<StyledBreadcrumb component='a' href='#' label='Catalog' />
					<StyledBreadcrumb label='Accessories' deleteIcon={<Expand />} />
				</Breadcrumbs> */}
				<Typography>Dashboard</Typography>

				<section class='bg-blue-800  h-[100vh] dark:bg-gray-900 max-h-3xl items-center'>
					<div class='grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'>
						<div class='mr-auto place-self-center lg:col-span-7'>
							<div class=' h-20'></div>
							<h1 class='text-white max-w-2xl mb-4 text-4xl font-extrabold  p-2 leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
								Better Intelligence
							</h1>
							<hr className=' p-2'></hr>
							<p>
								With our AI Powered market intelligence tools you can now access
								to the credible market intelligence anytime at your finger tips.
								You don’t need to be an insider anymore.
							</p>
							<div class='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
								{/* <a
                href="https://github.com/themesberg/landwind"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                xvc
              </a> */}
								{/* <a
                href='#'
                class='inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              > */}
								Get Started
							</div>
						</div>
						<div class=' lg:mt-0 lg:col-span-5 lg:flex'>
							{/* <img src={heroimg} alt='hero' /> */}
						</div>
					</div>
				</section>

				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Dessert (100g serving)</TableCell>
								<TableCell align='right'>Calories</TableCell>
								<TableCell align='right'>Fat&nbsp;(g)</TableCell>
								<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
								<TableCell align='right'>Protein&nbsp;(g)</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component='th' scope='row'>
										{row.name}
									</TableCell>
									<TableCell align='right'>{row.calories}</TableCell>
									<TableCell align='right'>{row.fat}</TableCell>
									<TableCell align='right'>{row.carbs}</TableCell>
									<TableCell align='right'>{row.protein}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default Dashboard;
