import asyncio
from prisma import Prisma
from prisma.models import User


async def main() -> None:
    db = Prisma(auto_register=True)
    await db.connect()

    # write your queries here
    # user = await User.prisma().create(
    #     data={
    #         'name': 'Erick Salvatierra',
    #         'email': 'erick@joininstall.com',
    #         'street': '3325 W Potomac Ave',
    #         'city': 'Chicago',
    #         'state': 'IL',
    #         'zip': 60651,
    #         'phone': 2247039929
    #     },
    # )


    user = await db.user.find_unique(
        where={
            'email': 'erick@joininstall.com',
        }
    )

    # print(user.id)
    dryer = {
        'applianceType': 'gas',
        'applianceModelId': 'XXR-40',
        # 'owner': user,
        'ownerId': user.id
    }

    # adddryer = await db.dryer.create(
    #     data=dryer
    # )

    finddryer = await db.dryer.find_unique(
        where={
            'ownerId': user.id
        }
    )

    print(finddryer.applianceType)


    await db.disconnect()

if __name__ == '__main__':
    asyncio.run(main())