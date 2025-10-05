import LoginForm from "@/components/LoginForm";
import loginBg from "@/assets/login-bg.jpeg";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center bg-background px-4 py-8">
        <LoginForm />
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden lg:flex lg:w-3/5 relative items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${loginBg})` }}
        />
        
        {/* Content on top of image */}
        <div className="relative z-10 px-12 max-w-2xl text-center">
          <div className="space-y-6">
            <h2 
              className="text-5xl lg:text-6xl font-bold leading-tight text-white"
              style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Empower Your Workflow with AI Simplicity
            </h2>
            <p 
              className="text-xl lg:text-2xl leading-relaxed text-white"
              style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Log in to access your personalized AI workspace and intelligent tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
