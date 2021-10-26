
export const postUser = user => (
    $.ajax({
        url: '/app/users',
        method: 'POST',
        data: { user },
    })
);

export const postSession = user => (
    $.ajax({
        url: '/app/session',
        method: 'POST',
        data: { user },
    })
);

export const deleteSession = () => (
    $.ajax({
        url: '/app/session',
        method: 'DELETE',
    })
);