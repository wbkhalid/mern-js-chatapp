import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = () => { }

  const handleSignup = () => { }

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[70vw] rounded-2xl grid lg:grid-cols-2'>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
              <h1 className='text-4xl font-bold'>Welcome</h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs defaultValue="login" className="w-3/4">
              <TabsList className='w-full rounded-none bg-transparent'>
                <TabsTrigger value="login" className='w-full'>Login</TabsTrigger>
                <TabsTrigger value="signup" className='w-full'>Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent className='flex flex-col gap-3 mt-4' value="login">
                <Input className='rounded-full p-5' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input className='rounded-full p-5' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button className='rounded-full' onClick={handleLogin}>Log In</Button>
              </TabsContent>

              <TabsContent className='flex flex-col gap-3' value="signup">
                <Input className='rounded-full p-5' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input className='rounded-full p-5' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input className='rounded-full p-5' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button className='rounded-full' onClick={handleSignup}>Sign Up</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
