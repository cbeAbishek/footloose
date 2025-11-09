"use client"

export async function submitForm(
  table: string,
  payload: FormData | Record<string, unknown>,
): Promise<{ success: boolean; error?: string }> {
  const endpoint = `/api/forms/${table}`

  try {
    const response =
      payload instanceof FormData
        ? await fetch(endpoint, {
            method: "POST",
            body: payload,
          })
        : await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      return {
        success: false,
        error: typeof error.error === "string" ? error.error : "Submission failed",
      }
    }

    return { success: true }
  } catch (error) {
    console.error(`[submitForm:${table}]`, error)
    return { success: false, error: "Unable to submit form" }
  }
}
