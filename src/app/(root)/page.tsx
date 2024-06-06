'use client'

import React from 'react'

import Button from '@/components/Button'

type User = {
  id: number
  name: string
}

const API_URI = 'http://localhost:6969'

function Root() {
  const [users, setUsers] = React.useState<User[]>([])

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const form = evt.currentTarget
    const formData = new FormData(evt.currentTarget)
    const name = formData.get('name') as string
    if (name?.length > 0) {
      form.reset()
      await window.fetch(`${API_URI}/users`, {
        method: 'POST',
        body: JSON.stringify({ name, email: `${name}@gmail.com` }),
      })
      await syncUsers()
    }
  }

  const syncUsers = async () => {
    const _users: User[] = await (
      await window.fetch(`${API_URI}/users`, {
        method: 'GET',
      })
    ).json()
    setUsers(_users ?? [])
  }

  React.useEffect(() => {
    syncUsers()
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-2">
          <label className="block" htmlFor="name">
            <p>Name:</p>
            <input
              type="text"
              id="name"
              name="name"
              className="px-2 py-1"
              required
            />
          </label>
          <Button type="submit" className="my-2">
            + Add
          </Button>
        </div>
      </form>
      <pre>
        <code>{JSON.stringify(users ?? [], null, 2)}</code>
      </pre>
    </div>
  )
}

export default Root
