import supabase from "./Data/fetchAPIData"

function databaseFunction ( from ) {
    
    async function insertDataRow (addData) {
        const { data, error } = await supabase
        .from(from)
        .insert([addData])
        .select()

        if (error) {
            console.log('Error thrown when trying to add question')
        } else {
            console.log('Question added:', data)
        }
    }

    async function deleteDataRow (id) {
        const { error } = await supabase
        .from(from)
        .delete()
        .eq('id', id)

        if (error) {
            console.log('Error deleting question id:', id)
        } else {
            console.log('Question deleted id:', id)
        }
    }

    async function editDataRow (id, editData) {
        const { data, error } = await supabase
        .from(from)
        .update(editData)
        .eq('id', id)
        .select()

        if (error) {
            console.log('Error editing question. id:', id)
        } else {
            console.log('Question has been edited. New Question:', data)
        }
    }

    return { insertDataRow, deleteDataRow, editDataRow }

}

export default databaseFunction;