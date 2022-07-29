import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UploadEvents = () => {
  const { register, reset, handleSubmit } = useForm();

  const imgStorageKey = "58d3c7355cf533547f2645e98915da5c";

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const events = {
            name: data.name,
            email: data.email,
            description: data.description,
            date: data.date,
            title: data.title,
            status: data.status,
            img: img,
          };
          // send to your database
          fetch("http://localhost:8000/recentEvents", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(events),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Event succesfully add");
            });
        }
      });
    reset();
  };
  return (
    <div>
      <section className=" mt-20 p-6 bg-gradient-to-b rounded-xl to-[#001510] from-[#00bf8f]  mx-auto shadow-md">
        <h1 className="text-2xl my-6 text-center font-mono  font-bold text-white capitalize dark:text-white">
          Complete Events
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 items-center gap-6 mt-4 md:grid-cols-2">
            <div>
              <label className="font-mono text-white">Event Title</label>
              <input
                type="text"
                placeholder="Birthday Party.."
                className="block px-4 py-2 mt-5 bg-transparent w-full input font-mono text-xl border-2 border-white text-white "
                {...register("title")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-mono block mb-2 text-white">
                  Event Are You Compelete
                </span>
              </label>
              <select
                className="block px-4 py-2 bg-transparent w-full input font-mono text-xl border-2 border-white text-white "
                {...register("status", {
                  required: {
                    value: true,
                    message: "Event Select is required*",
                  },
                })}
              >
                <option className="text-lg text-black">Corporate Events</option>
                <option className="text-lg text-black">
                  Non-Profit Events
                </option>
                <option className="text-lg text-black">Social Events</option>
                <option className="text-lg text-black">Weddings</option>
              </select>
            </div>
            <div>
              <label className="text-white font-mono">Your Email</label>
              <input
                type="text"
                placeholder="takeyourSmile@gmail.com"
                className="block px-4 py-2 mt-3 bg-transparent w-full input font-mono text-xl border-2 border-white text-white "
                {...register("email")}
                required
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Date</label>
              <input
                type="date"
                className="block px-4 py-2 mt-3 bg-transparent w-full input font-mono text-xl border-2 border-white text-white "
                {...register("date")}
                required
              />
            </div>
            <div>
              <label className="text-white font-mono">Description</label>
              <input
                {...register("description")}
                required
                id="textarea"
                placeholder="Message..."
                className="block w-full font-mono h-36 p-4 mb-4 text-white rounded-xl resize-none border-2 border-whitepx-4 py-2 mt-2 bg-transparent text-area"
              />
            </div>
            <div>
              <label className="block font-mono text-white">
                Upload Your Event images
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex">
                    <label className="relative cursor-pointer bg-white rounded-md  px-3 py-2">
                      <span className="font-mono text-green-600">
                        Upload a file
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        {...register("image", {
                          required: {
                            value: true,
                            message: "Image is Required",
                          },
                        })}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="px-6 py-3 leading-5 text-white transition-colors duration-200 transform mb-4 w-32 rounded-xl  bg-transparent border-2 font-mono border-white hover:bg-gradient-to-b hover:border-none to-[#001510] from-[#00bf8f]"
          />
        </form>
      </section>
    </div>
  );
};

export default UploadEvents;
