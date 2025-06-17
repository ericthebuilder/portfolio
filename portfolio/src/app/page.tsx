import Link from "next/link"
import {Github, Mail, Linkedin } from "lucide-react"
import {FaMedium} from "react-icons/fa"
const projects = [
  {
    title: "AWS Migration",
    description:
      "Migrated infrastructure originally created in the AWS console to Infrastructure as Code using AWS CDK TypeScript.  Enabled a fully automated, repeatable, and version-controlled infrastructure to support better governance, scalability, and long-term maintainability.",
    technologies: ["AWS", "CDK", "TypeScript", "CloudFormation", "VPC"],
    githubUrl: "https://github.com/ericthebuilder/techhealth-migration",
  },
  {
    title: "Automated CI/CD Pipeline with CloudFormation and Github Actions",
    description:
    "Created pull-request triggered workflows to validate and deploy CloudFormation stacks dynamically for testing. Automated cleanup of test CloudFormation stacks upon PR merge to maintain a clean environment and optimize resource use.",
    technologies: ["GitHub Actions","AWS Lambda", "CloudFormation", "YAML", "AWS S3"],
    githubUrl: "https://github.com/ericthebuilder/lambda-cicd",
  },
  {
    title: "IAM Project",
    description:
      "Performed risk-assessment then reconfigured IAM for startup, set up least-privilege permissions through users and groups, secured the root account, improved the password policy, and enforced MFA.",
    technologies: ["IAM", "AWS Secrets Manager", "Group Policy", "MFA"],
    githubUrl: "https://github.com/ericthebuilder/IAM-Project/blob/main/IAM_Project_Report.pdf",
  },
  {
    title: "Reaching Toward the Heavens",
    description:
      "Blog post documenting my transition into Cloud. It covers several foundational aspects of cloud computing like XaaS, networking, and virtualization.",
    technologies: ["Medium", "Linux"],
    mediumUrl: "https://medium.com/@heyericalvarez/reaching-toward-the-heavens-module-1-cloud-fundamentals-bc8afca6425f",
  },
]

export default function Portfolio() {
  return (
     <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <img
              src="/profilepic.jpg"
              alt="Profile picture"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-full mx-auto mb-6 border-4 border-gray-200 object-cover object-[center_10%]"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">Hello, I&apos;m Eric</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Orchestrating cloud infrastructure with precision and purpose; weaving Infrastructure as Code into seamless, secure, and scalable systems.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:heyericalvarez@gmail.com"
                className="inline-flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact
              </Link>
              <Link
                href="https://www.linkedin.com/in/link-to-eric-alvarez/"
                target="_blank"
                className="inline-flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/ericthebuilder"
                target="_blank"
                className="inline-flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200 h-full flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Link>
                    )}
                  {project.mediumUrl && (
                    <Link
                      href={project.mediumUrl}
                      target="_blank"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <FaMedium className="h-4 w-4 mr-1" />
                        Read
                        </Link>
                     )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in collaborating or discussing cloud engineering opportunities?
          </p>
          <div className="flex justify-center">
            <Link
              href="mailto:heyericalvarez@gmail.com"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 transition-colors"
            >
              <Mail className="h-5 w-5 mr-3" />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Eric Alvarez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

