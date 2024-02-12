import * as React from "react";

function page(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center w-full bg-sky-950 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col px-5 pb-12 w-full  max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="./banner.jpg"
            className="object-cover absolute inset-0 size-full"
          />

          <div className="relative self-center mt-56 mb-28 text-5xl font-semibold text-center text-white w-[733px] max-md:my-10 max-md:max-w-full max-md:text-4xl">
            {" "}
            Find Your Dream Apartment Hassle-Free with Our App
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="self-center mt-12 text-5xl font-medium text-center whitespace-nowrap text-stone-950 max-md:mt-10 max-md:text-4xl">
          How it works
        </div>
        <div className="mt-16 mb-12 max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-center px-5 py-4 w-full text-center bg-white rounded-lg max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="./1.png"
                  className="aspect-square w-[72px]"
                />
                <div className="mt-5 text-xl font-semibold leading-8 capitalize whitespace-nowrap text-zinc-900">
                  download app
                </div>
                <div className="self-stretch mt-2 text-base leading-5 text-zinc-600">
                  Get started by downloading our user-friendly app on your
                  smartphone.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-center px-5 py-4 w-full text-center bg-white rounded-lg max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="./2.png"
                  className="aspect-square w-[72px]"
                />
                <div className="mt-5 text-xl font-semibold leading-8 capitalize whitespace-nowrap text-zinc-900">
                  Browse Listings
                </div>
                <div className="self-stretch mt-2 text-base leading-5 text-zinc-600">
                  Explore our extensive marketplace featuring a diverse range of
                  apartment listings.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-center px-5 py-4 w-full text-center bg-white rounded-lg max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="./2.png"
                  className="aspect-square w-[72px]"
                />
                <div className="mt-5 text-xl font-semibold leading-8 capitalize whitespace-nowrap text-zinc-900">
                  Rent Your Ideal Apartment
                </div>
                <div className="self-stretch mt-2 text-base leading-5 text-zinc-600">
                  Once you&apos;ve found the apartment of your dreams, simply
                  follow the easy steps to secure your rental.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="justify-between my-12 w-full max-w-[1200px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-medium text-stone-950 max-md:max-w-full max-md:text-4xl">
                  Why Use Xamp?
                </div>{" "}
                <div className="mt-2 text-xl leading-8 text-slate-600 max-md:max-w-full">
                  Well, why not? Xamp has made efficient property management and
                  stress-free house hunting possible through one platform for
                  both landlords and property seekers. No more agent palava. No
                  more unnecessary house tours. No more rent collection
                  headaches. Instead, you can now skyrocket your earnings, and
                  save more of your money, time and energy. Sounds too good to
                  be true? Try it out for yourself.
                </div>{" "}
                <div className="justify-center self-start px-9 py-5 mt-8 text-base leading-6 text-white whitespace-nowrap bg-sky-800 shadow-sm rounded-[40px] max-md:px-5">
                  Get Started
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="./3.png"
                className="grow w-full aspect-[0.88] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="px-8 py-10 mx-5 mb-12 rounded-3xl shadow-lg bg-sky-950 max-md:px-5 max-md:mr-2.5 max-md:mb-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-16 py-12 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="mt-3.5 text-4xl font-medium leading-10 text-white max-md:max-w-full">
                  List your property for rent
                </div>{" "}
                <div className="mt-5 text-xl leading-8 text-gray-200 max-md:max-w-full">
                  Tired of chasing late rent, giving endless reminders, and
                  struggling to find tenants for your properties? It&apos;s time
                  for a change! Join Xamp today and experience stress-free
                  property management.
                </div>
                <div className="justify-center self-start px-9 py-5 mt-10 text-base leading-6 text-white whitespace-nowrap bg-sky-800 shadow-sm rounded-[40px] max-md:px-5">
                  Get Started
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="./4.png"
                className="self-stretch my-auto w-full aspect-[1.61] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-4xl font-medium leading-10 text-stone-950 max-md:max-w-full">
              Explore our listings
            </div>
            <div className="mt-5 text-xl leading-8 text-slate-600 max-md:max-w-full">
              Hear from some of our amazing customers who are automating their
              finances.
            </div>
          </div>
          <div className="flex gap-5 justify-between self-start">
            <div className="flex justify-center items-center px-4 w-14 h-14 rounded-3xl border border-solid backdrop-blur-sm aspect-square bg-white bg-opacity-90 border-[color:var(--Gray-200,#EAECF0)]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8576f81c99fb3e6cc147a2e00e7c40cd395f7018d05c70f20361064bd609587d?"
                className="w-full aspect-square"
              />
            </div>
            <div className="flex justify-center items-center px-4 w-14 h-14 rounded-3xl border border-solid backdrop-blur-sm aspect-square bg-white bg-opacity-90 border-[color:var(--Gray-200,#EAECF0)]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/53e16a689971c04a92e41a84a1703dc622b71b44ca3c4578b49a0dcd5520b95e?"
                className="w-full aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 mb-12 bg-white max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mx-auto w-full bg-white max-md:mt-6">
                <div className="flex overflow-hidden relative flex-col px-4 pt-3 pb-12 w-full text-xs font-medium leading-4 capitalize whitespace-nowrap aspect-[1.39]">
                  <img
                    loading="lazy"
                    srcSet="./5.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5 justify-between mb-36 w-full max-md:mb-10">
                    <div className="flex gap-2 justify-center my-auto">
                      <div className="justify-center px-2.5 py-1.5 text-green-700 bg-gray-200 rounded-md aspect-[2.92]">
                        Available
                      </div>
                      <div className="justify-center px-2.5 py-1.5 text-white bg-cyan-700 rounded-md aspect-[1.92]">
                        rent
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd56f1113847f53da23cb3da1a3e3b357aaf9bcb30ae6c45d6313745ab06f0e3?"
                      className="w-8 aspect-square"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center font-medium text-stone-950 max-md:mt-2.5">
                        <div className="flex gap-0.5 self-start px-2 py-1 text-xs leading-4 text-center text-green-700 whitespace-nowrap rounded-2xl bg-green-700 bg-opacity-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4845726a0e84e8bdf49fa6812229732d707dc1fee27af3766c042be38a6486b2?"
                            className="self-start w-3 aspect-square"
                          />
                          <div className="grow">Verified</div>
                        </div>
                        <div className="mt-2.5 text-base capitalize text-ellipsis">
                          Sophia estate
                        </div>
                        <div className="flex gap-2 justify-center mt-2.5 text-sm">
                          <div className="whitespace-nowrap">
                            <span className="font-semibold">1</span> bed
                          </div>
                          <div>
                            <span className="font-semibold">2</span> bath
                          </div>
                          <div className="flex-auto">
                            <span className="font-semibold">1,553</span> sqft
                          </div>
                        </div>
                        <div className="mt-2.5 text-sm capitalize text-zinc-600">
                          100 Smith Street Collingwood VIC 3066 AU
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                      <div className="text-2xl font-semibold capitalize text-stone-950 max-md:mt-2.5">
                        ₦n500,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mx-auto w-full bg-white max-md:mt-6">
                <div className="flex overflow-hidden relative flex-col px-4 pt-3 pb-12 w-full text-xs font-medium leading-4 capitalize whitespace-nowrap aspect-[1.39]">
                  <img
                    loading="lazy"
                    srcSet="./6.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5 justify-between mb-36 w-full max-md:mb-10">
                    <div className="flex gap-2 justify-center my-auto">
                      <div className="justify-center px-2.5 py-1.5 text-green-700 bg-gray-200 rounded-md aspect-[2.92]">
                        Available
                      </div>
                      <div className="justify-center px-2.5 py-1.5 text-white bg-cyan-700 rounded-md aspect-[1.92]">
                        rent
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c395465e17e60babc0130559640c710f20a642a47888dd73aff2d9d11bd18b31?"
                      className="w-8 aspect-square"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center font-medium text-stone-950 max-md:mt-2.5">
                        <div className="flex gap-0.5 self-start px-2 py-1 text-xs leading-4 text-center text-green-700 whitespace-nowrap rounded-2xl bg-green-700 bg-opacity-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3dea5c45a128dc8249500e44ed9aa4e65cdcf72f23bc1f57e237b33fb8b2093?"
                            className="self-start w-3 aspect-square"
                          />
                          <div className="grow">Verified</div>
                        </div>
                        <div className="mt-2.5 text-base capitalize text-ellipsis">
                          Sophia estate
                        </div>
                        <div className="flex gap-2 justify-center mt-2.5 text-sm">
                          <div className="whitespace-nowrap">
                            <span className="font-semibold">1</span> bed
                          </div>
                          <div>
                            <span className="font-semibold">2</span> bath
                          </div>
                          <div className="flex-auto">
                            <span className="font-semibold">1,553</span> sqft
                          </div>
                        </div>
                        <div className="mt-2.5 text-sm capitalize text-zinc-600">
                          100 Smith Street Collingwood VIC 3066 AU
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                      <div className="text-2xl font-semibold capitalize text-stone-950 max-md:mt-2.5">
                        ₦n500,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mx-auto w-full bg-white max-md:mt-6">
                <div className="flex overflow-hidden relative flex-col px-4 pt-3 pb-12 w-full text-xs font-medium leading-4 capitalize whitespace-nowrap aspect-[1.39]">
                  <img
                    loading="lazy"
                    srcSet="./7.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5 justify-between mb-36 w-full max-md:mb-10">
                    <div className="flex gap-2 justify-center my-auto">
                      <div className="justify-center px-2.5 py-1.5 text-green-700 bg-gray-200 rounded-md aspect-[2.92]">
                        Available
                      </div>
                      <div className="justify-center px-2.5 py-1.5 text-white bg-cyan-700 rounded-md aspect-[1.92]">
                        rent
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/677cd4c13627034646ab3f3613c2cef9e987d717d606cd1032b9f12aaaaf6740?"
                      className="w-8 aspect-square"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center font-medium text-stone-950 max-md:mt-2.5">
                        <div className="flex gap-0.5 self-start px-2 py-1 text-xs leading-4 text-center text-green-700 whitespace-nowrap rounded-2xl bg-green-700 bg-opacity-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64cc0f4f24988d8a0a9098cb841c5ad1108f83634b27fa9243c298346a8e5d72?"
                            className="self-start w-3 aspect-square"
                          />
                          <div className="grow">Verified</div>
                        </div>
                        <div className="mt-2.5 text-base capitalize text-ellipsis">
                          Sophia estate
                        </div>
                        <div className="flex gap-2 justify-center mt-2.5 text-sm">
                          <div className="whitespace-nowrap">
                            <span className="font-semibold">1</span> bed
                          </div>
                          <div>
                            <span className="font-semibold">2</span> bath
                          </div>
                          <div className="flex-auto">
                            <span className="font-semibold">1,553</span> sqft
                          </div>
                        </div>
                        <div className="mt-2.5 text-sm capitalize text-zinc-600">
                          100 Smith Street Collingwood VIC 3066 AU
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                      <div className="text-2xl font-semibold capitalize text-stone-950 max-md:mt-2.5">
                        ₦n500,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="py-8 pr-6 mx-5 my-12 bg-gray-50 rounded-3xl max-md:pr-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch px-16 py-12 my-auto max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="mt-3.5 text-4xl font-medium tracking-tighter leading-10 text-stone-950 max-md:max-w-full">
                  Access the power of our platform on the go.{" "}
                </div>
                <div className="mt-6 text-base leading-6 text-neutral-600 max-md:max-w-full">
                  Download our app now and start searching for your perfect
                  property anytime, anywhere!
                </div>
                <div className="mt-10 text-sm font-semibold leading-5 text-stone-950 max-md:max-w-full">
                  Get the app
                </div>
                <div className="flex gap-4 mt-4 max-w-full w-[286px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf31a525930bfe9ec6a9eb95fc983265f46329607cf5d0a5ad960944fa566ec3?"
                    className="flex-1 shrink-0 w-full aspect-[3.33] fill-black stroke-[1px] stroke-neutral-400"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/583caf5735a28cb9365b9ce83d74264b4af195406935b7fd1dc9f67213a6b011?"
                    className="flex-1 shrink-0 w-full aspect-[3.33]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <div className="flex grow justify-center items-center px-16 pt-12 w-full rounded-3xl bg-cyan-700 bg-opacity-20 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="./8.png"
                  className="mt-2 max-w-full aspect-[0.87] w-[314px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-3.5 w-full max-w-[1216px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch my-auto text-base leading-6 text-white max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="max-w-full aspect-[3.85] w-[182px]"
                  />
                  <div className="mt-8">
                    Design amazing digital experiences that create more happy in
                    the world.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 sm:max-sm:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-base font-medium leading-6 text-white whitespace-nowrap max-md:mt-8">
                        <div className="self-stretch text-sm leading-5">
                          Properties
                        </div>
                        <div className="mt-4">Buy</div>
                        <div className="mt-3">Rent</div>
                        <div className="mt-3">Lease</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base font-medium leading-6 text-white max-md:mt-8">
                        <div className="text-sm leading-5">Company</div>
                        <div className="mt-4">About us</div>
                        <div className="mt-3">Privacy</div>
                        <div className="mt-3">Terms</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-base font-medium leading-6 text-white max-md:mt-8">
                        <div className="text-sm leading-5">Support</div>
                        <div className="mt-4">Help Center</div>
                        <div className="mt-3">contact</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between pt-8 mt-16 border-t border-solid border-t-[color:var(--Subtext,#57585B)] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="grow text-base leading-6 text-white max-md:max-w-full">
              © 2024 XampApp UI. All rights reserved.
            </div>
            <div className="flex gap-5 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17dc0d44c9bd8623ecd3cb292837edb7d8106e083489d3f14599af488a5f9453?"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5be66888fdaf091d64494b5751bd4785a798a2979a30f335323f70cd67a9c1c?"
                className="w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d30df05fec9c0c5b8bab002b612ca546020c14184646dc8b1a906330cfa3b9e0?"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;
