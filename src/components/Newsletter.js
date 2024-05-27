const NewsLetter = () => {
  return (
    <aside className="py-10 sm:py-16 bg-gray-50 lg:py-20 dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700">
      <div className="px-4 mx-auto max-w-8xl">
        <h2 className="mb-4 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 md:font-extrabold lg:leading-none dark:text-white md:text-center lg:mb-7">
          Sign up for our newsletter
        </h2>
        <p className="mb-4 text-base text-gray-500 md:mb-6 dark:text-gray-400 md:text-center md:text-xl lg:px-20 xl:px-56">
          Do you want to get notified when a new component is added to Nothing.me?
          Sign up for our newsletter and you will be among the first to find out
          about new features, components, versions, and tools.
        </p>
        <div className="mb-4">
          <form
            action="https://app.convertkit.com/forms/4692392/subscriptions"
            className="seva-form formkit-form flex max-w-xl md:mx-auto"
            method="post"
            data-sv-form="4692392"
            data-uid="344e3b5c48"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            min-width="400 500"
          >
            <div className="w-full" data-style="clean">
              <label htmlFor="member_email" className="hidden">
                Email address
              </label>
              <div className="relative h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                  </svg>
                </div>
                <input
                  type="email"
                  id="member_email"
                  name="email_address"
                  className="block w-full px-3 py-4 pl-11 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl formkit-input focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                data-element="submit"
                id="member_submit"
                className="formkit-submit formkit-submit w-full px-4 py-4 text-base font-medium text-center text-white bg-blue-700 dark:bg-blue-600 dark:border-blue-600 border border-blue-700 cursor-pointer rounded-r-xl formkit-submit hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default NewsLetter;
