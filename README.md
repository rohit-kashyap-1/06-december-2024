const [name,setName]= useState('')
const [nameError,setNameError] = useState('')

----------------------------------------
const [name,setName] = useState({value:'',error:''})
const [email,setEmail] = useState({value:'',error:''})

----------------------------------------
const [data,setData] = useState({name:{},email:{}})


Build a profile form for a user which have the following details
1. First name
2. Last name
3. Gender
4. Email
5. phone: valid 10 digit
6. city
7. Profile image: a placeholder for picking an image, once picked set the profile 