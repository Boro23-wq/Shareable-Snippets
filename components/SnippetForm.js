import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { mutate } from 'swr';
// import { useUser } from '@auth0/nextjs-auth0';
import { useToast } from '@chakra-ui/react';

export default function SnippetForm({ snippet }) {
  const router = useRouter();
  const toast = useToast();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      code: snippet ? snippet.data.code : '',
      language: snippet ? snippet.data.language : '',
      description: snippet ? snippet.data.description : '',
      name: snippet ? snippet.data.name : '',
    },
  });

  const createSnippet = async (data) => {
    const { code, language, description, name } = data;
    try {
      await fetch('/api/createSnippet', {
        method: 'POST',
        body: JSON.stringify({ code, language, description, name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast({
        title: 'Success!',
        description: "We've created your snippet.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSnippet = async () => {
    try {
      await fetch('/api/deleteSnippet', {
        method: 'DELETE',
        body: JSON.stringify({ id: snippet.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      router.push('/');
      toast({
        title: 'Deleted!',
        description: "We've deleted your snippet.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateSnippet = async (data) => {
    const { code, language, description, name } = data;
    const id = snippet.id;

    try {
      await fetch('/api/updateSnippet', {
        method: 'PUT',
        body: JSON.stringify({ code, language, description, name, id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      router.push('/');
      toast({
        title: 'Saved!',
        description: "We've saved your snippet.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(snippet ? updateSnippet : createSnippet)}>
      {/* NAME FIELD */}
      <div className='mb-4'>
        <label
          className='block text-gray-600 text-sm font-semibold mb-1'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='focus:border-gray-600 w-full border bg-white rounded px-3 py-2 outline-none text-gray-700'
          ref={register({ required: true })}
        />
        {errors.name && (
          <p className='mt-1 text-sm font-semibold text-gray-800'>
            Name field is required!
          </p>
        )}
      </div>

      {/* LANGUAGE FIELD */}
      <div className='mb-4'>
        <label
          className='block text-gray-600 text-sm font-semibold mb-1'
          htmlFor='language'
        >
          Language
        </label>
        <select
          id='language'
          name='language'
          className='focus:border-gray-600 w-full border bg-white rounded px-3 py-2 outline-none text-gray-700'
          ref={register({ required: true })}
          defaultValue='Javascript'
        >
          <option className='py-1' value='Javascript'>
            Javascript
          </option>
          <option className='py-1'>Bash</option>
          <option className='py-1'>HTML</option>
          <option className='py-1'>CSS</option>
          <option className='py-1'>React</option>
        </select>
        {errors.language && (
          <p className='mt-1 text-sm font-semibold text-gray-800'>
            Language field is required!
          </p>
        )}
      </div>

      {/* DESCRIPTION FIELD */}
      <div className='mb-4'>
        <label
          className='block text-gray-600 text-sm font-semibold mb-1'
          htmlFor='description'
        >
          Description
        </label>
        <textarea
          name='description'
          id='description'
          rows='3'
          className='focus:border-gray-600 resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
          placeholder='What does the snippet do?'
          ref={register({ required: true })}
        ></textarea>
        {errors.description && (
          <p className='mt-1 text-sm font-semibold text-gray-800'>
            Description field is required!
          </p>
        )}
      </div>

      {/* CODE FIELD */}
      <div className='mb-4'>
        <label
          className='block text-gray-600 text-sm font-semibold mb-1'
          htmlFor='code'
        >
          Code Snippet
        </label>
        <textarea
          name='code'
          id='code'
          rows='10'
          className='focus:border-gray-600 resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
          placeholder="For ex. console.log('Paste your code snippet here.')"
          ref={register({ required: true })}
        ></textarea>
        {errors.code && (
          <p className='mt-1 text-sm font-semibold text-gray-800'>
            Code field is required!
          </p>
        )}
      </div>

      <button
        className='transition duration-500 border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
        type='submit'
      >
        Save
      </button>

      <Link href='/'>
        <a className='transition duration-500 mt-3 inline-block border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'>
          Cancel
        </a>
      </Link>

      {snippet && (
        <button
          className='transition duration-500 border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
          type='button'
          onClick={deleteSnippet}
        >
          Delete
        </button>
      )}
    </form>
  );
}
