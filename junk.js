        // "build": "export SET NODE_OPTIONS=--openssl-legacy-provider --max-old-space-size=3000 && react-scripts build",


// {/* <FormControl>
// <RadioGroup
//     row
//     aria-label="Asset Category"
//     value={values.tfloorCategory}
//     onChange={(e) => setTradingFloorCategory(e.target.value)}
//     name="row-radio-buttons-group"
// >
//     <FormControlLabel value="livestock" control={<Radio />} label="Livestock" />
//     <FormControlLabel value="comodities" control={<Radio />} label="Comodities" />
//     <FormControlLabel value="seed-input" control={<Radio />} label="Seeds Input" />
//     <FormControlLabel value="machinery" control={<Radio />} label="Machinery" />
// </RadioGroup>
// </FormControl>

// <Gid item xs={12}>
// <MainCard
//     content={false}
//     sx={{
//         '& svg': {
//             width: 50,
//             height: 50,
//             color: theme.palette.secondary.main,
//             borderRadius: '14px',
//             p: 1.25,
//             bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.default : 'primary.light'
//         }
//     }}
// >
//     <Grid container alignItems="center" spacing={0}>
//         <Grid item xs={12} sm={6} sx={blockSX}>
//             <Grid
//                 container
//                 alignItems="center"
//                 spacing={1}
//                 justifyContent={matchDownXs ? 'space-between' : 'center'}
//             >
//                 <Grid item>
//                     <IconShare stroke={1.5} />
//                 </Grid>
//                 <Grid item sm zeroMinWidth>
//                     <Typography variant="h5" align="center">
//                         50
//                     </Typography>
//                     <Typography variant="subtitle2" align="center">
//                         MEMBERS
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <Grid item xs={12} sm={6} sx={blockSX}>
//             <Grid
//                 container
//                 alignItems="center"
//                 spacing={1}
//                 justifyContent={matchDownXs ? 'space-between' : 'center'}
//             >
//                 <Grid item>
//                     <IconAccessPoint stroke={1.5} />
//                 </Grid>
//                 <Grid item sm zeroMinWidth>
//                     <Typography variant="h5" align="center">
//                         5
//                     </Typography>
//                     <Typography variant="subtitle2" align="center">
//                         CHANNELS
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Grid>
//     <Grid container alignItems="center" spacing={0}>
//         <Grid item xs={12} sm={6} sx={blockSX}>
//             <Grid
//                 container
//                 alignItems="center"
//                 spacing={1}
//                 justifyContent={matchDownXs ? 'space-between' : 'center'}
//             >
//                 <Grid item>
//                     <IconCircles stroke={1.5} />
//                 </Grid>
//                 <Grid item sm zeroMinWidth>
//                     <Typography variant="h5" align="center">
//                         50
//                     </Typography>
//                     <Typography variant="subtitle2" align="center">NEAR WALLETS
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <Grid item xs={12} sm={6} sx={blockSX}>
//             <Grid
//                 container
//                 alignItems="center"
//                 spacing={1}
//                 justifyContent={matchDownXs ? 'space-between' : 'center'}
//             >
//                 <Grid item>
//                     <IconCreditCard stroke={1.5} />
//                 </Grid>
//                 <Grid item sm zeroMinWidth>
//                     <Typography variant="h5" align="center">
//                         3
//                     </Typography>
//                     <Typography variant="subtitle2" align="center">
//                         DEPLOYED CONTRACTS
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Grid>
// </MainCard>
// </Grid>

// <TotalRevenueCard title="Total Stocks Transfers" />
// // ---------------
//                     <Grid item xs={12}>
//                     <UserCountCard
//                         primary="Daily New Users"
//                         secondary="1,658"
//                         iconPrimary={AccountCircleTwoTone}
//                         color={theme.palette.secondary.main}
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <UserCountCard
//                         primary="Daily New Stocks "
//                         secondary="1K"
//                         iconPrimary={DescriptionTwoToneIcon}
//                         color={theme.palette.primary.main}
//                     />
//                 </Grid>

// const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//         id: commodityItem.commodityID,
//         name: commodityItem.trackerID,
//         image: commodityItem.imageUrl,
//         marketPrice: commodityItem.marketPrice,
//         species: commodityItem.species,
//         offerPrice: 0,
//         color: '',
//         size: '',
//         quantity: 1
//     },
//     validationSchema,
//     onSubmit: (values) => {
//         dispatch(addProduct(values, cart.checkout.commodities));
//         dispatch(
//             openSnackbar({
//                 open: true,
//                 message: 'Submit Success',
//                 variant: 'alert',
//                 alert: {
//                     color: 'success'
//                 },
//                 close: false
//             })
//         );

//         history('/e-commerce/checkout');
//     }
// });
// const { values, errors, handleSubmit, handleChange } = formik;
// const [commodityItem, setCommodityItem] = useState(commodityItemInfo);


// useEffect(() =>{
//     console.log('commodity state')
//     console.log(commodity)
//     setCommodityItem(commodityItem)
// },[commodity])
// const cart = useSelector((state) => state.cart);
// const commodity = useSelector((state) => state.commodity); */}
// import { socket } from 'contexts/JWTContext';

// if(socket){
//     console.log('socket connected')
//     console.log(socket.connected)
//     await socket.emit('listing', 'web client emitted', (response) => {
//         console.log('enlisting response')
//         console.log(response)
//     })
//     console.log('enlisting done')

// }
// socket.emit('new-enlisting', newlisting, ack => {
//     console.log('ack')
//     console.log(ack)
// });

// socket.on('enlisting', listing => {
//     console.log('new listing')
//     console.log(listing)
// })
// useEffect(() => {
//     if(socket){
//         socket.on('connect', () => {
//             if(socket.connected){
//                 console.log('web client socket connected')
//             }
//         })
//         socket.on('user_socket_broadcasting', (data) => {
//                 console.log('user_socket_broadcasting data', data)
//         })
//     }else{
//         console.log('web client socket not connected')
//     }
// },[socket])
// await socket.on('connection', () => {
//     console.log('web client connected')
// })


// useEffect(() =>{
//     console.log('state.auctionRequests', state.auctionRequests)
//     if(socket){
//         socket.on('auction-request', async (request) => {
//             console.log('updateAuctionRequestForCurrentAuctionHouse', request)
//             await dispatch(updateAuctionRequestForCurrentAuctionHouse(request))

//     })
//     }else{
//         console.log('web client socket not connected')
//     }
// }, [socket])

// <Grid item xs={12} sm={12}>
// <Autocomplete
//     disablePortal
//     options={auctionFloors}
//     // value={auctionFloors[0].tradingName}
//     defaultValue={auctionFloors[0].tradingName}
//     onChange={(event, value) => {
//         console.log('auctionFloors onChange value')
//         console.log(value)
//         setAuctionFloor(value)
//     }}
//     renderInput={(params) => <TextField {...params} label="Commodities Auction Floors" />}
// />

// </Grid>

// <Grid item xs={12} lg={6} md={6}>
// <Grid container spacing={gridSpacing}>
//     <Grid item xs={12}>
//         <MarketShareAreaChartCard />
//     </Grid>
//     <Grid item xs={12} lg={6}>
//         <RevenueCard
//             primary="Trading Stocks"
//             secondary="$42,562"
//             content="$50,032 Last Month"
//             iconPrimary={MonetizationOnTwoToneIcon}
//             color={theme.palette.secondary.main}
//         />
//     </Grid>
//     <Grid item xs={12} lg={6}>
//         <RevenueCard
//             primary="Transactions Recorded"
//             secondary="486"
//             content="20% Increase"
//             iconPrimary={AccountCircleTwoTone}
//             color={theme.palette.primary.main}
//         />
//     </Grid>

// </Grid>
// </Grid>
//     <Grid item xs={12}>
//         <Button
//             variant="text"
//             disableElevation
//             disableRipple
//             component={Link}
//             to="#"
//             sx={{
//                 color,
//                 p: 0,
//                 '&:hover': { bgcolor: 'transparent' }
//             }}
//             endIcon={<ArrowRightAltRoundedIcon />}
//         >
//             {link}
//         </Button>
// </Grid>

// <Grid item xs={12}>
// <MainCard>
//     <Grid container spacing={gridSpacing}>
//         <Grid item xs={12}>
//         <Grid container spacing={1}>
//             <Grid item xs={12}>
//                 <Typography variant="subtitle1" align="left">
//                     Commodity Image*
//                 </Typography>
//             </Grid>
//             <Grid item xs={12}>
//                 <Grid container spacing={1}>
//                 <div>
//                 <MainCard>
//                     <div className="App">
//                     <form className="form" onSubmit={handleSubmit}>
//                     {commodityImage && 
//                          <CardMedia
//                                 sx={{ height: 220 }}
//                                 image={commodityImage}
//                                 title="Contemplative Reptile"
//                                 component={Link}
//                     />}
//                     <input
                          
//                           type="file" name="data" onChange={(e) => {
//                             updateState({commodityState: true})
//                             retrieveImage(e,'commodityImage')
//                             uploader(e, "commodityImage");
//                             }} >
//                             </input>
//                 </form>
//             </div>
//     { upLoadingCommodityIPFS 
//     ?(
//                 <Grid item xs={12} md={12} sm={6}>
//                     <SubCard title="Uploading commodity Image to IPFS secured cloud ...">
//                         <Grid container spacing={2} justifyContent="center">
//                             <Grid item xs={12}>
//                                 <LinearProgress />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <LinearProgress color="secondary" />
//                             </Grid>
//                         </Grid>
//                     </SubCard>
//                 </Grid>
//     ):(<>
//         {commodityIPFSHash 
//         ?(<Grid item md={12} xs={12}>
//             <Stack direction="row" alignItems="center" spacing={1}>
//                 <Grid item>
//                     <DoneAllIcon size="10" color="green" />
//                 </Grid>
//                 <Typography variant="h6" sx={{ color: 'green.500'}}>
//                     Successfully uploaded Commodity Image
//                 </Typography>
//             </Stack>
//             <Grid item>
//                 <Stack direction="row" alignItems="center" spacing={1}>
//                     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                         HASH-Key
//                     </Typography>
//                     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                             ({commodityIPFSHash})
//                     </Typography>                        
//                         {/* <IpfsImage hash={commodityIPFSHash}/> */}
                    
//                 </Stack>
//             </Grid>
//           </Grid>                               
//         ):(<></>)
//         }</>)}
//             </MainCard>
//                         </div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         </Grid>
//         <Grid item xs={12}>
//             <Grid container justifyContent="space-between" spacing={gridSpacing}>
//                 <Grid item>
//                     {/* <Button variant="text" color="secondary" startIcon={<AttachmentTwoToneIcon />}>
//                         Gallery
//                     </Button> */}
//                 </Grid>
//                 <Grid item>
//                     <AnimateButton>
//                         <Button onClick={(e) => handleSubmit(e)} variant="contained" color="primary" startIcon={<LayersTwoToneIcon />}>
//                         Upload file
//                         </Button>
//                     </AnimateButton>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Grid>
// </MainCard>
// </Grid>
// {/* ---------------- */}
// <Grid item xs={12}>
// <MainCard>
//     <Grid container spacing={gridSpacing}>
//         <Grid item xs={12}>
//         <Grid container spacing={1}>
//             <Grid item xs={12}>
//                 <Typography variant="subtitle1" align="left">
//                 Medical Certificate Image*
//                 </Typography>
//             </Grid>
//             <Grid item xs={12}>
//                 <Grid container spacing={1}>
//                 <div>
//                 <MainCard>
//                     <div className="App">
//                     <form className="form" onSubmit={handleSubmit}>
//                     {medicalCertificateImage && 
//                          <CardMedia
//                                 sx={{ height: 220 }}
//                                 image={medicalCertificateImage}
//                                 title="Contemplative Reptile"
//                                 component={Link}
//                     />}
//                     <input
                          
//                           type="file" name="data" onChange={(e) => {
//                             updateState({medicalCertificateState: true})
//                             retrieveImage(e,"medicalCertificateImage")
//                             uploader(e, "medicalCertificateImage");
//                             }} >
//                             </input>

//                 </form>
//             </div>
//     { upLoadingMedicalCertificateIPFS 
//     ?(
//                 <Grid item xs={12} md={12} sm={6}>
//                     <SubCard title="Uploading medical certificate Image to IPFS secured cloud ...">
//                         <Grid container spacing={2} justifyContent="center">
//                             <Grid item xs={12}>
//                                 <LinearProgress />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <LinearProgress color="secondary" />
//                             </Grid>
//                         </Grid>
//                     </SubCard>
//                 </Grid>
//     ):(<>
//         {medicalCertificateIPFSHash 
//         ?(<Grid item md={12} xs={12}>
//             <Stack direction="row" alignItems="center" spacing={1}>
//                 <Grid item>
//                     <DoneAllIcon size="10" color="green" />
//                 </Grid>
//                 <Typography variant="h6" sx={{ color: 'green.500'}}>
//                     Successfully uploaded medical certificate Image
//                 </Typography>
//             </Stack>
//             <Grid item>
//                 <Stack direction="row" alignItems="center" spacing={1}>
//                     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                         HASH-Key
//                     </Typography>
//                     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                             ({medicalCertificateIPFSHash})
//                     </Typography>
//                 </Stack>
//             </Grid>
//           </Grid>                               
//         ):(<></>)
//         }</>)}
//             </MainCard>
//                         </div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         </Grid>
//         <Grid item xs={12}>
//             <Grid container justifyContent="space-between" spacing={gridSpacing}>
//                 <Grid item>
//                     {/* <Button variant="text" color="secondary" startIcon={<AttachmentTwoToneIcon />}>
//                         Gallery
//                     </Button> */}
//                 </Grid>
//                 <Grid item>
//                     <AnimateButton>
//                         <Button onClick={(e) => handleSubmit(e)} variant="contained" color="primary" startIcon={<LayersTwoToneIcon />}>
//                         Upload file
//                         </Button>
//                     </AnimateButton>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Grid>
// </MainCard>
// </Grid>
// <Grid item xs={12}>
// <MainCard>
//     <Grid container spacing={gridSpacing}>
//         <Grid item xs={12}>
//         <Grid container spacing={1}>
//             <Grid item xs={12}>
//                 <Typography variant="subtitle1" align="left">
//                     Ownership Deed Image*
//                 </Typography>
//             </Grid>
//             <Grid item xs={12}>
//                 <Grid container spacing={1}>
//                 <div>
//                 <MainCard>
//                     <div className="App">
//                     <form className="form" onSubmit={handleSubmit}>
//                     {ownershipDeedImage && 
//                          <CardMedia
//                                 sx={{ height: 220 }}
//                                 image={ownershipDeedImage}
//                                 title="Contemplative Reptile"
//                                 component={Link}
//                     />}
//                     <input
                          
//                           type="file" name="data" onChange={(e) => {
//                             updateState({ownershipDeedState: true})
//                             retrieveImage(e,"ownershipDeedImage")
//                             uploader(e, "ownershipDeedImage");
//                             }} >
//                             </input>
//                 </form>
//             </div>
//     { upLoadingOwnershipDeedIPFS 
//     ?(
//                 <Grid item xs={12} md={12} sm={6}>
//                     <SubCard title="Uploading ownership deed Image to IPFS secured cloud ...">
//                         <Grid container spacing={2} justifyContent="center">
//                             <Grid item xs={12}>
//                                 <LinearProgress />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <LinearProgress color="secondary" />
//                             </Grid>
//                         </Grid>
//                     </SubCard>
//                 </Grid>
//     ):(<>
//         {ownershipDeedIPFSHash 
//         ?(<Grid item md={12} xs={12}>
//             <Stack direction="row" alignItems="center" spacing={1}>
//                 <Grid item>
//                     <DoneAllIcon size="10" color="green" />
//                 </Grid>
//                 <Typography variant="h6" sx={{ color: 'green.500'}}>
//                     Successfully uploaded ownership deed Image
//                 </Typography>
//             </Stack>
//             <Grid item>
//                 <Stack direction="row" alignItems="center" spacing={1}>
//                     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                         HASH-Key
//                     </Typography>
//                     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                             ({ownershipDeedIPFSHash})
//                     </Typography>
//                 </Stack>
//             </Grid>
//           </Grid>                               
//         ):(<></>)
//         }</>)}
//             </MainCard>
//                         </div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         </Grid>
//         <Grid item xs={12}>
//             <Grid container justifyContent="space-between" spacing={gridSpacing}>
//                 <Grid item>
//                     {/* <Button variant="text" color="secondary" startIcon={<AttachmentTwoToneIcon />}>
//                         Gallery
//                     </Button> */}
//                 </Grid>
//                 <Grid item>
//                     <AnimateButton>
//                         <Button onClick={(e) => handleSubmit(e)} variant="contained" color="primary" startIcon={<LayersTwoToneIcon />}>
//                         Upload file
//                         </Button>
//                     </AnimateButton>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Grid>
// </MainCard>
// </Grid>

{/* <Grid container spacing={2}>
<Grid item md={12} xs={12}>
    {commodityItem?.tradingStatus === "asset-locked"
    ?(<Grid  item sx={{marginLeft: 2, marginTop: 1}}
        md={3} xs={12}>
        <Button
            disabled={showRequestToTradeForm ? true : false}
            fullWidth
            color="primary"
            variant="contained"
            size="medium"
            onClick={() => getWarehouses()}
            > Request To Trade</Button>
        </Grid>):(<></>)}
    {commodityItem?.tradingStatus === "asset-locked"
        ?(<Grid item 
            sx={{marginLeft: 2, marginTop: 1}}
            md={3}
            xs={12}
            >
                <Button type="submit" 
                disabled={showRequestToTradeForm ? true : false}
                fullWidth color="secondary" variant="contained" 
                onClick={() => setShowGetAccountForm(true)}
                size="medium">
                    Direct Transfer
                </Button>
            </Grid>
        ):(<></> )}
        </Grid>
    </Grid> */}

    //                               <Grid item>
//     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//     commodity Image IPFSHash
//         </Typography>
//         {
//         commodityState !== true
//         ?
//         <Typography variant="h6" sx={{ color: 'red'}}>
//             Add commodity Image
//         </Typography>
//         :
//         <Stack direction="row" alignItems="center" spacing={1}>
//             <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                 HASH-Key
//             </Typography>
//             <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                 - {commodityIPFSHash}
//             </Typography>
//         </Stack>
//         }
// </Grid>
// <Grid item>
//     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//     Medical Certificate Image IPFSHash
//         </Typography>
//         {
//         medicalCertificateState !== true
//         ?
//         <Typography variant="h6" sx={{ color: 'red'}}>
//             Add Medical Certificate Image
//         </Typography>
//         :
//         <Stack direction="row" alignItems="center" spacing={1}>
//         <Typography variant="h6" sx={{ color: 'grey.500'}}>
//             HASH-Key
//         </Typography>
//         <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                - {medicalCertificateIPFSHash}
//         </Typography>
//         </Stack>                                            
//     }

// </Grid> 
// <Grid item>
//     <Typography variant="h6" sx={{ color: 'grey.500'}}>
//     Ownership Deed Image IPFSHash
//         </Typography>
//         {
//         ownershipDeedState !== true
//         ?
//         <Typography variant="h6" sx={{ color: 'red'}}>
//             Add Ownership Deed Image
//         </Typography>
//         :
//     <Stack direction="row" alignItems="center" spacing={1}>
//         <Typography variant="h6" sx={{ color: 'grey.500'}}>
//             HASH-Key
//         </Typography>
//         <Typography variant="h6" sx={{ color: 'grey.500'}}>
//                - {ownershipDeedIPFSHash}
//         </Typography>
//     </Stack>
//     }
// </Grid>       

{/* <Grid item xs={12}>
<TextField
    id="standard-select-category"
    select
    label="Select Species*"
    value={category}
    fullWidth
    name='commoditySpecies'
    onChange={(event) => updateState({commoditySpecies: event?.target.value})}
    helperText="Please select Specie"
>
    {categories.map((option) => (
        <MenuItem key={option.value} value={option.value}>
            {option.label}
        </MenuItem>
    ))}
</TextField>
</Grid> */}



{/* <TableCell
align="center"
component="th"
id={labelId}
scope="row"
onClick={(event) => handleClick(event, row.name)}
sx={{ cursor: 'pointer' }}
>
<>       
{ row && row.imageUrl
? (<IpfsImage hash={row.imageUrl} />)
: <>
    <Typography sx={{ pl: 1.5, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}>no-image set</Typography>

</> }                          
</>                                            
</TableCell> */}


// server {
//     server_name www.api.exchange.umoja.greats.systems api.exchange.umoja.greats.systems;
    
//     location / {
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_set_header Host $host;
//         proxy_pass http://127.0.0.1:4000;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection "upgrade";
//         # location /overview {
//         #     proxy_pass http://127.0.0.1:4001$request_uri;
//         #     proxy_redirect off;
//         # }
//     }
// }

// sudo ln -s /etc/nginx/sites-available/api.exchange.umoja.greats.systems /etc/nginx/sites-enabled/
// sudo certbot --nginx -d api.exchange.umoja.greats.systems -d www.api.exchange.umoja.greats.systems

// server {

//     root /var/www/umoja/exchange.umoja.greats.systems/html;
//     index index.html index.htm index.nginx-debian.html;

//     server_name exchange.umoja.greats.systems www.exchange.umoja.greats.systems

//     location / {
//             try_files $uri /index.html$is_args$args =404;
//     }
// }


// sudo ln -s /etc/nginx/sites-available/exchange.umoja.greats.systems /etc/nginx/sites-enabled/
// sudo certbot --nginx -d exchange.umoja.greats.systems -d www.exchange.umoja.greats.systems


// sudo nginx -t
// sudo systemctl daemon-reload
// sudo systemctl restart nginx