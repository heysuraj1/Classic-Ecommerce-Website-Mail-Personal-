//This is the page where the routes are defined like http:// => baseUrl 
// (  YOU GET IT YAARR )


const baseUrl = process.env.NODE_ENV === 'production' ? "https://ecomninjademo.vercel.app" : "http://192.168.43.53:3000"


export default baseUrl;