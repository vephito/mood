import Editor from '@/components/Editor';
import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';

const getEntry = async (id) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  const { mood, summary, color, subject, negative } = entry?.analysis;
  const analysisData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? 'True' : 'False' },
  ];
  return (
    <div className="w-full h-full ">
      <Editor entry={entry} />
    </div>
  );
};
export default EntryPage;
