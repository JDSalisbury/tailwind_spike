import { Link } from "react-router-dom";

function Team() {
  return (
    <>
      <div>
        <div class="font-serif text-4xl">Team Page</div>
      </div>
      <div class="divide-y divide-gray-200">
        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <p>Developing Bold solutions for real world problems:</p>
          <ul class="list-disc space-y-2">
            <li class="flex items-start">
              <span class="h-6 flex items-center sm:h-7">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="ml-2">
                Custom Web applications built to automate your manual&nbsp;
                <code class="text-sm font-bold text-gray-900">
                  processes
                </code>{" "}
              </p>
            </li>
            <li class="flex items-start">
              <span class="h-6 flex items-center sm:h-7">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="ml-2">
                Flexable, Extensible, and&nbsp;
                <code class="text-sm font-bold text-gray-900">Secure</code>
              </p>
            </li>
            <li class="flex items-start">
              <span class="h-6 flex items-center sm:h-7">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="ml-2">Just doing some dope shit</p>
            </li>
          </ul>
          <p>
            Automation at its finest, if your using excel, we will get your job
            replaced by an automated solution in no time.
          </p>
        </div>
        <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
          <p>Would you like to know more?</p>
          <p>
            <a
              href="mailto:buttchew@gmail.com"
              class="text-cyan-600 hover:text-cyan-700"
            >
              {" "}
              Join up now &rarr;{" "}
            </a>
          </p>
          <p>
            <Link class="text-cyan-600 hover:text-cyan-700" to="/">
              {" "}
              &larr; Back{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Team;
